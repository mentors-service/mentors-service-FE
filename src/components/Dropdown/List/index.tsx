import useDropdown from '@hooks/contexts/useDropdown';

const LIST_ITEM = ['최신순', '평점순', '스크랩순'];

const List = () => {
  const { isOpened, handleClickContent } = useDropdown();

  if (!isOpened) return null;

  return (
    <ul>
      {LIST_ITEM.map((item) => (
        <li key={item}>
          <button type='button' onClick={handleClickContent}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
