import CommentListItem from '@article/components/CommentList/CommentListItem';
import { ICommentData } from '@article/types';

import * as S from './CommentList.style';

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
