import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  padding: 0 25px;
  margin-top: 30px;
`;

export const Profile = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  margin-top: 25px;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fonts.$base};
`;

export const Description = styled.div`
  width: 175px;
  margin-top: 25px;
`;

export const MentorSkills = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fonts.$lg};
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MyPost = styled.section`
  margin-top: 50px;
  p {
    margin-bottom: 25px;
  }
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
  gap: 10px;
  width: 100%;
  padding: 10px;
  background: linear-gradient(${({ theme }) => theme.colors.$primary}, ${({ theme }) => theme.colors.$white});
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ArticleCardTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const ArticleCardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.$sm};
  font-weight: 700;
`;

export const ArticleCardStatus = styled.div<{ articleStatus: boolean }>`
  padding: 5px 10px;
  background: #ebebeb;
  background-color: ${({ articleStatus, theme }) => (articleStatus ? theme.colors.$secondary : theme.colors.$gray)};
  border-radius: 10px;
`;

export const ArticleCardBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArticleInfoWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const ArticleInfoGroup = styled.div`
  display: flex;
  gap: 5px;
`;

export const ArticleInfoText = styled.span``;
