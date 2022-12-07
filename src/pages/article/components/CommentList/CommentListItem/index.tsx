import UserInfo from '@article/components/UserInfo';
import { ICommentData } from '@article/types';
import { CommentIcon } from '@assets/svgs';
import { Fragment } from 'react';
import * as S from './CommentListItem.style';

const CommentListItem = ({ creater, createdAt, contents, childs }: ICommentData) => {
  return (
    <S.CommentsWrapper>
      <S.Comment>
        <S.CommentTopWrapper>
          <UserInfo nickname={creater?.nickname ?? '탈퇴한 회원'} createdAt={createdAt} />
          <S.ReplyCommentButton>
            <CommentIcon width={20} height={20} />
          </S.ReplyCommentButton>
        </S.CommentTopWrapper>

        <S.CommentContent>{contents}</S.CommentContent>
      </S.Comment>

      {childs.length !== 0 && (
        <S.ReplyComment>
          {childs.map((child) => (
            <Fragment key={child.commentId}>
              <S.CommentTopWrapper>
                <UserInfo nickname={child.creater?.nickname ?? '탈퇴한 회원'} createdAt={child.createdAt} />
                <S.ReplyCommentButton>
                  <CommentIcon width={20} height={20} />
                </S.ReplyCommentButton>
              </S.CommentTopWrapper>
              <S.CommentContent>{child.contents}</S.CommentContent>
            </Fragment>
          ))}
        </S.ReplyComment>
      )}
    </S.CommentsWrapper>
  );
};

export default CommentListItem;
