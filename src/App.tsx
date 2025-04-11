import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import CatDisplay from './components/CatDisplay';
import ControlPanel from './components/ControlPanel';
import CatButton from './components/CatButton';

import { fetchRandomCat } from './services/catApi';

import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
`;

function App() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [enabled, setEnabled] = useState<boolean>(true);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false);

  const fetchCat = useCallback(async () => {
    if (!enabled) return;

    setIsLoading(true);
    try {
      const catData = await fetchRandomCat();
      setImageUrl(catData.url);
    } catch (error) {
      console.error('Failed to fetch:', error);
    } finally {
      setIsLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    if (!autoRefresh || !enabled) return;

    const intervalId = setInterval(() => {
      fetchCat();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [autoRefresh, enabled, fetchCat]);

  useEffect(() => {
    if (enabled) {
      fetchCat();
    }
  }, [enabled, fetchCat]);

  return (
    <AppContainer>
      <ControlPanel
        enabled={enabled}
        autoRefresh={autoRefresh}
        onEnabledChange={setEnabled}
        onAutoRefreshChange={setAutoRefresh}
      />
      <CatButton onClick={fetchCat} disabled={!enabled || isLoading} />
      <CatDisplay imageUrl={imageUrl} isLoading={isLoading} enabled={enabled} />
    </AppContainer>
  );
}

export default App;
