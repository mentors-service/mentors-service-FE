import styled from 'styled-components';

export const CommentsWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Comment = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 10px;
  background: linear-gradient(${({ theme }) => theme.colors.$white}, ${({ theme }) => theme.colors.$primary});
`;

export const CommentTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReplyCommentButton = styled.button``;

export const ReplyComment = styled(Comment)`
  margin-left: 25px;
`;

export const CommentContent = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xs};
`;
