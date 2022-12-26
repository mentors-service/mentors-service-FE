import styled from 'styled-components';

export const UserInfoWrapper = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const UserName = styled.span``;

export const CreatedAt = styled.span`
  font-size: ${({ theme }) => theme.fonts.$xxs};
  color: ${({ theme }) => theme.colors.$black};
  opacity: 0.5;
`;
