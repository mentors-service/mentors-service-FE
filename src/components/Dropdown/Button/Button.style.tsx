import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  padding: 5px 10px;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.$secondary_dark};
  }
`;
