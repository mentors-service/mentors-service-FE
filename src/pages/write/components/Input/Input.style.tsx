import styled from 'styled-components';

export const WriteInput = styled.input<{ text: boolean; error: boolean }>`
  padding: 5px 10px;
  border: 2px solid ${({ text, theme }) => (text ? `${theme.colors.$secondary}` : `${theme.colors.$gray}`)};
  border-radius: 10px;
  transition: 0.3s;
  ${({ error, theme }) => error && `border: 2px solid ${theme.colors.$tertiary}`}
`;
