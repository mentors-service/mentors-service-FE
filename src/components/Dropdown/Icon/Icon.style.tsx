import { KeyboardArrowDownIcon as KeyboardArrowDown } from '@assets/svgs';
import styled from 'styled-components';

export const KeyboardArrowDownIcon = styled(KeyboardArrowDown)<{ $toggle: boolean }>`
  width: 24px;
  height: 24px;
  transition: 0.3s;
  transform: ${({ $toggle }) => ($toggle ? 'rotate(-180deg)' : 'rotate(0)')};
`;
