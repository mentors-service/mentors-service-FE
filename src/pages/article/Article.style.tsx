import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  padding: 0 50px;
  margin-top: 25px;
`;

export const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  background: linear-gradient(180deg, #ffffff 0%, #c6eefd 100%);
  border-radius: 10px;
`;

export const User = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const ProgressSpan = styled.span`
  max-width: fit-content;
  padding: 5px 10px 5px 10px;
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: ${(props) => props.theme.fonts.$sm};
  background: #0bbfad;
  border-radius: 10px;
`;

export const ArticleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 15px;
  div {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  div:nth-child(4) {
    gap: 10px;
  }
`;

export const Dt = styled.dt`
  font-size: ${(props) => props.theme.fonts.$sm};
  font-weight: 700;
  line-height: 18px;
`;

export const Dd = styled.dd`
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
`;

export const Tag = styled(Dt)`
  margin-right: 10px;
`;

export const TagSpan = styled(ProgressSpan)``;

export const ArticleContent = styled.p`
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
`;

export const ScrapWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`;

export const PersonnelStatus = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 78px;
    height: 34px;
    font-size: ${(props) => props.theme.fonts.$xxs};
    line-height: 15px;
    background: #0bbfad;
    border-radius: 10px;
  }
  span {
    color: #ffffff;
  }
`;

export const Scrap = styled(PersonnelStatus)``;

export const TextareaWrapper = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 75px;
  padding: 8px;
  margin: 25px 0 25px 0;
  border: 2px solid #ebebeb;
`;

export const PostBtn = styled.button`
  position: absolute;
  top: 54px;
  right: 8px;
  padding: 10px;
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
  color: #ffffff;
  background: #0bbfad;
  border-radius: 10px;
`;
