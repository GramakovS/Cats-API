import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

interface ControlPanelProps {
  enabled: boolean;
  autoRefresh: boolean;
  onEnabledChange: (enabled: boolean) => void;
  onAutoRefreshChange: (autoRefresh: boolean) => void;
}

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
`;

const ControlPanel: FC<ControlPanelProps> = ({
  enabled,
  autoRefresh,
  onEnabledChange,
  onAutoRefreshChange,
}) => {
  const handleEnabledChange = (e: ChangeEvent<HTMLInputElement>) => {
    onEnabledChange(e.target.checked);
  };

  const handleAutoRefreshChange = (e: ChangeEvent<HTMLInputElement>) => {
    onAutoRefreshChange(e.target.checked);
  };

  return (
    <ControlContainer>
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          id="enabled"
          checked={enabled}
          onChange={handleEnabledChange}
        />
        <CheckboxLabel htmlFor="enabled">Enabled</CheckboxLabel>
      </CheckboxContainer>
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          id="auto-refresh"
          checked={autoRefresh}
          onChange={handleAutoRefreshChange}
        />
        <CheckboxLabel htmlFor="auto-refresh">
          Auto-refresh every 5 second
        </CheckboxLabel>
      </CheckboxContainer>
    </ControlContainer>
  );
};

export default ControlPanel;