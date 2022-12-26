import * as S from './ArticleInfo.style';

interface ArticleInfoProps {
  title: '제목' | '장소' | '일정';
  children: React.ReactNode;
}

const ArticleInfo = ({ title, children }: ArticleInfoProps) => {
  return (
    <S.ArticleInfoWrapper>
      <S.ArticleInfoTitle>{title}</S.ArticleInfoTitle>
      <S.ArticleInfoContent>{children}</S.ArticleInfoContent>
    </S.ArticleInfoWrapper>
  );
};

export default ArticleInfo;
