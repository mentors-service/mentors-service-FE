import { ProfileIcon, ScrapIcon } from '@assets/svgs';
import * as S from './Button.style';

interface ArticleButtonProps {
  icon: 'scrap' | 'apply';
  text: string;
}

const ArticleButton = ({ icon, text }: ArticleButtonProps) => {
  return (
    <S.Button>
      {icon === 'scrap' && <ScrapIcon width='20' height='20' />}
      {icon === 'apply' && <ProfileIcon width='20' height='20' />}
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

export default ArticleButton;
