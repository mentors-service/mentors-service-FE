import { ProfileIcon, ScrapIcon } from '@assets/svgs';
import * as S from './Button.style';

interface ArticleButtonProps {
  icon: 'scrap' | 'apply';
  text: string;
  onClick: () => void;
}

const ArticleButton = ({ icon, text, onClick }: ArticleButtonProps) => {
  return (
    <S.Button onClick={onClick}>
      {icon === 'scrap' && <ScrapIcon width='20' height='20' />}
      {icon === 'apply' && <ProfileIcon width='20' height='20' />}
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

export default ArticleButton;
