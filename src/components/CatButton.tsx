import { FC } from 'react';
import styled from 'styled-components';

interface CatButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: #4caf50;
  transition: background-color 0.3s, border-color 0.3s;
  
  &:hover:not(:disabled) {
    background-color: #45a049;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const CatButton: FC<CatButtonProps> = ({ onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      Get cat
    </Button>
  );
};

export default CatButton;