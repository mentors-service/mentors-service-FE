import styled from 'styled-components';

export const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 50px;
`;

export const CommentArtcle = styled.article``;

export const ReplyCommentArticle = styled.article`
  padding-left: 25px;
`;
export const CommentContent = styled.p`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
`;
