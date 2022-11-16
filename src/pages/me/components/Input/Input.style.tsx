import styled from 'styled-components';

export const MyProfileInputWrapper = styled.div`
  position: relative;
`;

export const MyProfileInput = styled.input`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.$gray};
`;

export const MyProfileInputBottom = styled.div<{ $error: boolean }>`
  position: absolute;
  bottom: 0;
  width: ${({ $error }) => ($error ? '100%' : 0)};
  height: 2px;
  background-color: ${({ theme, $error }) => ($error ? theme.colors.$tertiary : theme.colors.$secondary)};
  transition: 0.3s;

  ${MyProfileInput}:focus ~ & {
    width: 100%;
  }
`;
