import useToast from '@hooks/contexts/Toast/useToast';
import * as S from './List.style';
import ListItem from './ListItem';

const List = () => {
  const { selector } = useToast();

  if (!selector.length) return null;

  return (
    <S.List>
      {selector.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </S.List>
  );
};

export default List;
