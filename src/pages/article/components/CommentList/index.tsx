import { ICommentData } from '@article/types';
import * as S from './CommentList.style';
import CommentListItem from './CommentListItem';

interface CommentListProps {
  commentList: ICommentData[];
}

const CommentList = ({ commentList }: CommentListProps) => {
  return (
    <S.CommentList>
      {commentList.map((comment) => (
        <CommentListItem {...comment} key={comment.commentId} />
      ))}
    </S.CommentList>
  );
};

export default CommentList;
