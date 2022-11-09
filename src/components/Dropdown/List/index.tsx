import useDropdown from '@hooks/contexts/Dropdown/useDropdown';
import { useEffect, useState } from 'react';
import * as S from './List.style';

const LIST_ITEM = ['최신순', '평점순', '스크랩순'];

const List = () => {
  const { isOpened, handleClickContent } = useDropdown();
  const [unmountAnimate, setUnmountAnimate] = useState(isOpened);

  const handleChangeAnimation = () => {
    if (isOpened) return;

    setUnmountAnimate(false);
  };

  useEffect(() => {
    if (!isOpened) return;

    setUnmountAnimate(true);
  }, [isOpened]);

  if (!unmountAnimate) return null;

  return (
    <S.List $active={isOpened} onAnimationEnd={handleChangeAnimation}>
      {LIST_ITEM.map((item) => (
        <S.Item key={item}>
          <S.Button onClick={handleClickContent}>{item}</S.Button>
        </S.Item>
      ))}
    </S.List>
  );
};

export default List;
