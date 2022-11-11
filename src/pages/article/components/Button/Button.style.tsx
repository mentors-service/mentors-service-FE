import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 34px;
  line-height: 15px;
  padding: 5px 10px;
  gap: 10px;
  background: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.$white};
`;
