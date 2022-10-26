import styled from 'styled-components';

export const TabNav = styled.nav`
  position: relative;
`;

export const TabList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const TabItem = styled.li`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.$gray};
`;

export const TabButton = styled.button`
  width: 100%;
  height: 34px;
  text-align: center;
`;

export const TabBottom = styled.div<{ currentTab: string }>`
  position: absolute;
  bottom: 0;
  width: ${({ currentTab }) => (currentTab ? '33.3%' : '0')};
  height: 2px;
  background-color: ${({ theme }) => theme.colors.$secondary};
  transition: 0.3s;
  transform: ${({ currentTab }) => currentTab === 'Article' && 'translateX(0)'};
  transform: ${({ currentTab }) => currentTab === 'Comment' && 'translateX(100%)'};
  transform: ${({ currentTab }) => currentTab === 'Scrap' && 'translateX(200%)'};
`;
