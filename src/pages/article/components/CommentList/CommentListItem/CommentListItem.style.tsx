import styled from 'styled-components';

export const CommentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
`;

export const Comment = styled.article`
  padding: 10px;
  background: linear-gradient(${({ theme }) => theme.colors.$white}, ${({ theme }) => theme.colors.$primary});
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ReplyComment = styled(Comment)`
  margin-left: 25px;
`;

export const CommentContent = styled.p`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
`;
