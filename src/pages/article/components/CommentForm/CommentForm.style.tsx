import styled from 'styled-components';

export const CommentFormWrapper = styled.div`
  position: relative;
`;

export const CommentForm = styled.form``;

export const Textarea = styled.textarea<{ $toggle: boolean }>`
  width: 100%;
  height: 75px;
  padding: 10px;
  transition: 0.3s;
  border-radius: 10px;
  border: 2px solid ${({ theme, $toggle }) => ($toggle ? theme.colors.$primary : theme.colors.$gray)};
`;

export const PostButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.$secondary_dark};
  }
`;
