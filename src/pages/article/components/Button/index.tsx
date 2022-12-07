import { ProfileIcon, ScrapIcon } from '@assets/svgs';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import * as S from './Button.style';

interface ArticleButtonProps {
  icon: 'scrap' | 'apply';
  text: string;
  mutate: UseMutateFunction<AxiosResponse<any, any>, unknown, string, { previousArticle: unknown }>;
  isToggle: boolean;
}

const ArticleButton = ({ icon, text, mutate, isToggle }: ArticleButtonProps) => {
  const { id: articleId } = useParams();

  const handleClick = () => {
    if (!articleId) return;

    mutate(articleId);
  };

  return (
    <S.Button onClick={handleClick} $toggle={isToggle}>
      {icon === 'scrap' && <ScrapIcon width='20' height='20' />}
      {icon === 'apply' && <ProfileIcon width='20' height='20' />}
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

export default ArticleButton;
