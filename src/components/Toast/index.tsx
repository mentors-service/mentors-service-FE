import styled from 'styled-components';
import { Istate } from './type';
import ListItem from './ListItem';

interface ToastProps {
  list: Istate[];
}

const Toast = ({ list }: ToastProps) => {
  if (!list.length) return null;

  return (
    <List>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </List>
  );
};

export const List = styled.ul`
  position: fixed;
  top: 15%;
  left: 50%;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transform: translateX(-50%);
`;

export default Toast;
