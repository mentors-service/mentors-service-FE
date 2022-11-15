import UserInfo from '@article/components/UserInfo';
import { ICommentData } from '@article/types';
import { CommentIcon } from '@assets/svgs';
import { Fragment } from 'react';
import * as S from './CommentListItem.style';

const CommentListItem = ({ creater, createdAt, content, childs }: ICommentData) => {
  return (
    <S.CommentsWrapper>
      <S.Comment>
        <S.CommentTopWrapper>
          <UserInfo creater={creater} createdAt={createdAt} />
          <S.ReplyCommentButton>
            <CommentIcon width={20} height={20} />
          </S.ReplyCommentButton>
        </S.CommentTopWrapper>

        <S.CommentContent>{content}</S.CommentContent>
      </S.Comment>

      <S.ReplyComment>
        {childs.map((child) => (
          <Fragment key={child.id}>
            <S.CommentTopWrapper>
              <UserInfo creater={child.creater} createdAt={child.createdAt} />
              <S.ReplyCommentButton>
                <CommentIcon width={20} height={20} />
              </S.ReplyCommentButton>
            </S.CommentTopWrapper>
            <S.CommentContent>{child.content}</S.CommentContent>
          </Fragment>
        ))}
      </S.ReplyComment>
    </S.CommentsWrapper>
  );
};

export default CommentListItem;
