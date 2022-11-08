import { CommentData } from './types';
import * as S from './Comment.style';
import UserStatus from './UserStatus';
import ReplyComment from './ReplyComment';

const Comment = ({ creater, createdAt, content, childs }: CommentData) => {
  return (
    <S.CommentsSection>
      <S.CommentArtcle>
        <UserStatus creater={creater} createdAt={createdAt} />
        <S.CommentContent>{content}</S.CommentContent>
      </S.CommentArtcle>

      <S.ReplyCommentArticle>
        {childs.map((child) => (
          <ReplyComment {...child} key={1} />
        ))}
      </S.ReplyCommentArticle>
    </S.CommentsSection>
  );
};

export default Comment;
