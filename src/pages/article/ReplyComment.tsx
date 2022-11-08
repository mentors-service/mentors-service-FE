import { CommentData } from './types';
import UserStatus from './UserStatus';
import * as S from './Comment.style';

const ReplyComment = ({ creater, createdAt, content, childs }: CommentData) => {
  return (
    <>
      <UserStatus creater={creater} createdAt={createdAt} />
      <S.CommentContent>{content}</S.CommentContent>
    </>
  );
};

export default ReplyComment;
