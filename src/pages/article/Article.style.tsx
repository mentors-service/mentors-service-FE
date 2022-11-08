import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  padding: 0 50px;
`;

export const User = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const ProgressSpan = styled.span`
  max-width: fit-content;
  padding: 5px 10px 5px 10px;
  font-size: ${(props) => props.theme.fonts.$xs};
  background: #ebebeb;
  border-radius: 10px;
`;

export const ArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fonts.$xs};
  font-weight: 700;
  line-height: 18px;
`;

export const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    display: flex;
  }
  div:nth-last-child(1) {
    gap: 20px;
  }
`;

export const Dt = styled.dt`
  width: 60px;
  font-size: ${(props) => props.theme.fonts.$xs};
  font-weight: 700;
  line-height: 18px;
`;

export const Dd = styled.dd`
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
`;

export const TagSpan = styled(ProgressSpan)``;

export const ArticleContent = styled.p`
  margin: 25px 0 6px 0;
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
`;

export const PersonnelStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 78px;
    height: 34px;
    font-size: ${(props) => props.theme.fonts.$xxs};
    line-height: 15px;
    background: #ebebeb;
    border-radius: 10px;
  }
`;

export const TextareaWrapper = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 75px;
  padding: 8px;
  margin-top: 10px;
  border: 2px solid #ebebeb;
`;

export const PostBtn = styled.button`
  position: absolute;
  top: 50px;
  right: 8px;
  padding: 5px 10px;
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
  background: #ebebeb;
  border-radius: 10px;
`;
