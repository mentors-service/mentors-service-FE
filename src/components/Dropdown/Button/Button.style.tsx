import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
`;
