import { useAppDispatch, useAppSelector } from './store/hooks';
import { plusNumber } from './store/data';

const App = () => {
  const count = useAppSelector((state) => state.data.number);
  console.log(count);
  const dispatch = useAppDispatch();

  const onIncrease = () => {
    dispatch(plusNumber(count));
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease} type='button'>
          +
        </button>
      </div>
    </div>
  );
};

export default App;
