import styled from 'styled-components';

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 50px 0;
`;

export const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  background: linear-gradient(${({ theme }) => `${theme.colors.$white}, ${theme.colors.$primary}`});
  border-radius: 10px;
`;

export const ArticleTopWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ArticleStatus = styled.div`
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.$secondary};
  color: ${({ theme }) => theme.colors.$white};
  border-radius: 10px;
`;

export const ArticleSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ArticleInfoList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ArticleContent = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xs};
`;

export const ScrapWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`;
