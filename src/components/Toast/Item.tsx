import useToast from '@hooks/contexts/Toast/useToast';
import { useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { Istate } from './type';

interface ItemProps {
  item: Istate;
}

const Item = ({ item }: ItemProps) => {
  const { id, message, time, type } = item;

  const { toast } = useToast();

  useEffect(() => {
    if (!time) return undefined;

    const timer = setTimeout(() => {
      toast({ type: 'DELETE', payload: item });
    }, time);

    return () => clearTimeout(timer);
  }, [time, item, toast]);

  return (
    <li>
      <span>{id}</span>
      <span>{message}</span>
      <span>{type}</span>

      {time && <ProgressBar time={time} />}
    </li>
  );
};

export default Item;
