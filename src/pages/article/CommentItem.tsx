import { CommentIcon } from '@assets/svgs';
import { CommentData } from './types';
import * as S from './CommentItem.style';
import UserStatus from './UserStatus';

const CommentItem = ({ creater, createdAt, content, childs }: CommentData) => {
  return (
    <S.CommentsWrapper>
      <S.Comment>
        <div>
          <UserStatus creater={creater} createdAt={createdAt} />
          <button type='button'>
            <CommentIcon width={20} height={20} />
          </button>
        </div>
        <S.CommentContent>{content}</S.CommentContent>
      </S.Comment>

      <S.ReplyComment>
        {childs.map((child) => (
          <>
            <div>
              <UserStatus creater={child.creater} createdAt={child.createdAt} />
              <button type='button'>
                <CommentIcon width={20} height={20} />
              </button>
            </div>
            <S.CommentContent>{child.content}</S.CommentContent>
          </>
        ))}
      </S.ReplyComment>
    </S.CommentsWrapper>
  );
};

export default CommentItem;
