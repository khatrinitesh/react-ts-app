import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #1a202c;
  padding: 8px;
  min-width: 64px;

  background: transparent;

  transition: all 0.1s ease-in;

  &:hover {
    background: #1a202c;
    color: #ffffff;
  }
`;