import { Istate } from '@components/Toast/type';
import useToast from '@hooks/contexts/Toast/useToast';
import { useEffect, useState, useMemo } from 'react';
import * as S from './ListItem.style';

interface ItemProps {
  item: Istate;
}

const ListItem = ({ item }: ItemProps) => {
  const { message, time, status } = item;

  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(0);

  const { toast } = useToast();

  const lastTime = useMemo(() => {
    if (isPaused) return timer;

    return Date.now() - timer;
  }, [isPaused, timer]);

  const handleClick = () => {
    toast({ type: 'DELETE', payload: item });
  };

  const handlePauseToggle = () => {
    setIsPaused((prev) => !prev);
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = setInterval(() => {
      setTimer(Date.now() - lastTime);
    }, 1);

    return () => clearInterval(interval);
  }, [isPaused, time, lastTime]);

  useEffect(() => {
    if (!time || time > timer) return;

    toast({ type: 'DELETE', payload: item });
  }, [time, timer, toast, item]);

  return (
    <S.Item>
      <S.Button
        onMouseEnter={handlePauseToggle}
        onMouseLeave={handlePauseToggle}
        onClick={handleClick}
        $status={status}
      >
        <S.Text>{message}</S.Text>

        {time && (
          <S.TimerBar $isPaused={isPaused} style={{ width: `calc(100% * ${1 - timer / time})` }} $status={status} />
        )}
      </S.Button>
    </S.Item>
  );
};

export default ListItem;
