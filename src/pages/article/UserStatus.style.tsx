import styled from 'styled-components';

export const UserStatusWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Name = styled.span`
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
`;

export const ActivityTime = styled.span`
  font-size: ${(props) => props.theme.fonts.$xxs};
  line-height: 13px;
  color: #808080;
`;
