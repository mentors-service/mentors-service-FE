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

export const ArticleContent = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xs};
`;

export const ScrapWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`;

export const TextareaWrapper = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 75px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.$gray};
`;

export const PostButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.$secondary_dark};
  }
`;
