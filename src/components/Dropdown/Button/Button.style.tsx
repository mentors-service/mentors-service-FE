import styled from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  padding: 5px 10px;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
`;
