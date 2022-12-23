import { getProfileInfo } from '@api/user';
import { BookmarkIcon, CommentIcon, GroupIcon } from '@assets/svgs';
import { useToast } from '@hooks/contexts';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { IArticle } from '@home/types';

import * as S from './Profile.style';

const Profile = () => {
  const { id: userId } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  const { data: profileInfo } = useQuery(['profile', userId], () => getProfileInfo(userId!), {
    onError: () => {
      toast({ type: 'ADD', payload: { status: 'ERROR', message: '게시물 에러' } });
    },
  });

  const handleClickCard = () => {
    navigate(`/article/${userId}`);
  };

  if (!profileInfo) return null;

  return (
    <S.ProfileWrapper>
      <S.Profile>
        <S.ImageTemp />

        <S.ProfileInfo>
          <S.Name>{profileInfo.user.nickname}</S.Name>
          <S.Description>{profileInfo.user.description}</S.Description>
        </S.ProfileInfo>
      </S.Profile>

      <S.MyPost>
        <p>게시글</p>
        <S.ArticleCardList>
          {profileInfo.articles.data.map((item: IArticle) => (
            <S.ArticleCardItem key={item.articleId}>
              <S.ArticleCardButton onClick={handleClickCard} value={item.articleId}>
                <S.ArticleCardTopWrapper>
                  <S.ArticleCardTitle>{item.title}</S.ArticleCardTitle>
                  <S.ArticleCardStatus articleStatus={Boolean(item.status === 'ARTICLE_INPROGRESS')}>
                    {item.status}
                  </S.ArticleCardStatus>
                </S.ArticleCardTopWrapper>

                <S.ArticleCardBottomWrapper>
                  <S.ArticleInfoWrapper>
                    <S.ArticleInfoGroup>
                      <GroupIcon width={20} height={20} />
                      <S.ArticleInfoText>
                        {item.recruit.joinCnt}/{item.totalRecruit}
                      </S.ArticleInfoText>
                    </S.ArticleInfoGroup>

                    <S.ArticleInfoGroup>
                      <CommentIcon width={20} height={20} />
                      <S.ArticleInfoText>{item.commentCnt}</S.ArticleInfoText>
                    </S.ArticleInfoGroup>

                    <S.ArticleInfoGroup>
                      <BookmarkIcon width={20} height={20} />
                      <S.ArticleInfoText>{item.scraps.scrapCnt}</S.ArticleInfoText>
                    </S.ArticleInfoGroup>
                  </S.ArticleInfoWrapper>
                </S.ArticleCardBottomWrapper>
              </S.ArticleCardButton>
            </S.ArticleCardItem>
          ))}
        </S.ArticleCardList>
      </S.MyPost>
    </S.ProfileWrapper>
  );
};

export default Profile;
