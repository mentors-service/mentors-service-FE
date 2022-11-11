import UserStatus from '@article/components/UserInfo';
import { CommentData } from '@article/types';
import { CommentIcon } from '@assets/svgs';
import { Fragment } from 'react';
import * as S from './CommentListItem.style';

const CommentListItem = ({ creater, createdAt, content, childs }: CommentData) => {
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
          <Fragment key={child.id}>
            <div>
              <UserStatus creater={child.creater} createdAt={child.createdAt} />
              <button type='button'>
                <CommentIcon width={20} height={20} />
              </button>
            </div>
            <S.CommentContent>{child.content}</S.CommentContent>
          </Fragment>
        ))}
      </S.ReplyComment>
    </S.CommentsWrapper>
  );
};

export default CommentListItem;
