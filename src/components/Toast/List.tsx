import Item from './Item';
import useToast from './useToast';

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
