import styled from 'styled-components';

export const ArticleInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ArticleInfoTitle = styled.dt`
  font-size: ${({ theme }) => theme.fonts.$sm};
  font-weight: 700;
`;

export const ArticleInfoContent = styled.dd`
  font-size: ${({ theme }) => theme.fonts.$xs};
`;
