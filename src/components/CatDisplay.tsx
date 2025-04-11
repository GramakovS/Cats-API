import { FC } from 'react';
import styled from 'styled-components';

import NoCatImg from '../assets/no-cat.jpg';

interface CatDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  enabled: boolean;
}

const CatImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const CatImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const LoadingText = styled.p`
  color: #666;
  font-size: 20px;
`;

const PlaceholderImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${NoCatImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const CatDisplay: FC<CatDisplayProps> = ({ imageUrl, isLoading, enabled }) => {
  return (
    <CatImageContainer>
      {isLoading ? (
        <LoadingText>Loading...</LoadingText>
      ) : imageUrl && enabled ? (
        <CatImage src={imageUrl} alt="Random cat" />
      ) : (
        <PlaceholderImage />
      )}
    </CatImageContainer>
  );
};

export default CatDisplay;
