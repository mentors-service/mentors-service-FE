import { SearchIcon as Search } from '@assets/svgs';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 50px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  position: absolute;
  stroke: ${({ theme }) => theme.colors.$secondary};
  fill: ${({ theme }) => theme.colors.$secondary};
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const SearchInput = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
  padding: 5px 10px;
  padding-left: 34px;
  width: 100%;
  box-sizing: border-box;

  ::placeholder {
    color: ${({ theme }) => theme.colors.$secondary};
  }
`;

export const SearchContent = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.$sm};
  font-weight: 700;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const TagItem = styled.li`
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
  padding: 5px 10px;
`;

export const HomeDropdown = styled.div`
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin-right: auto;
`;

export const HomeDropdownText = styled.span`
  color: ${({ theme }) => theme.colors.$white};
`;

export const ArticleCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ArticleCardItem = styled.li``;

export const ArticleCardButton = styled.button`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: linear-gradient(${({ theme }) => theme.colors.$primary}, ${({ theme }) => theme.colors.$white});
  padding: 10px;
  gap: 10px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ArticleCardTopWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const ArticleCardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.$sm};
  font-weight: 700;
`;

export const ArticleCardStatus = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.$secondary};
`;

export const ArticleCardContent = styled.p`
  text-align: left;
`;

export const ArticleCardBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArticleUserProfileWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const UserImageTemp = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.$gray};
  border-radius: 100%;
`;

export const UserName = styled.span``;

export const ArticleCreateAt = styled.time`
  font-size: ${({ theme }) => theme.fonts.$xxs};
  color: ${({ theme }) => theme.colors.$black};
  opacity: 0.5;
`;

export const ArticleInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
`;

export const ArticleInfoGroup = styled.div`
  display: flex;
  gap: 5px;
`;

export const ArticleInfoText = styled.span``;
