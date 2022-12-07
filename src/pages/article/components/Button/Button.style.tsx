import styled from 'styled-components';

export const Button = styled.button<{ $toggle: boolean }>`
  display: flex;
  align-items: center;
  height: 34px;
  line-height: 15px;
  padding: 5px 10px;
  gap: 10px;
  background-color: ${({ theme, $toggle }) => ($toggle ? theme.colors.$secondary_dark : theme.colors.$secondary)};
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme, $toggle }) => !$toggle && theme.colors.$secondary_dark};
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.$white};
`;
