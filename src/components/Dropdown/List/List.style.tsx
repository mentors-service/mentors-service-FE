import { BounceIn, BounceOut } from '@styles/effects/animations';
import styled from 'styled-components';

export const List = styled.ul<{ $active: boolean }>`
  position: absolute;
  bottom: -100px;
  margin-top: 20px;
  z-index: 10;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 120px;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
  opacity: ${({ $active }) => ($active ? '100%' : '0')};

  ${({ $active }) => ($active ? BounceIn : BounceOut)}
`;

export const Item = styled.li``;

export const Button = styled.button`
  width: 100%;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.$white};
  text-align: left;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.$secondary_dark};
    border-radius: 10px;
  }
`;
