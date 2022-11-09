import useToast from '@hooks/contexts/Toast/useToast';
import Item from './Item';

const List = () => {
  const { selector } = useToast();

  return (
    <ul>
      {selector.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
