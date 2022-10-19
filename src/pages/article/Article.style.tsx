import styled from 'styled-components';

export const ProfileWrapper = styled.main`
  padding: 0 50px 0 50px;
`;

export const User = styled.section`
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
`;

export const UserStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

export const ProgressSpan = styled.span`
  font-size: ${(props) => props.theme.fonts.$xs};
  max-width: fit-content;
  background: #ebebeb;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
`;

export const ArticleDataWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const ArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 18px;
`;

export const Place = styled.div`
  display: flex;
`;
export const Date = styled.div`
  display: flex;
`;
export const Tag = styled.div`
  display: flex;
  gap: 20px;
`;

export const Label = styled(Title)`
  width: 60px;
`;

export const Span = styled.span`
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
`;

export const TagSpan = styled(ProgressSpan)``;

export const ArticleContent = styled.p`
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
  margin: 25px 0 6px 0;
`;

export const PersonnelStatus = styled(ProgressSpan)`
  img {
    margin-right: 12px;
  }
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fonts.$xxs};
  line-height: 15px;
  margin-left: 192px;
  padding: 10px;
`;

export const TextareaWrapper = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea`
  height: 75px;
  margin-top: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ebebeb;
`;

export const PostBtn = styled.button`
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
  position: absolute;
  top: 50px;
  right: 8px;
  background: #ebebeb;
  border-radius: 10px;
  padding: 5px 10px;
`;

export const Comments = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Comment = styled.article``;

export const ReplyComment = styled.article`
  padding-left: 25px;
`;
export const CommentContent = styled.p`
  font-size: ${(props) => props.theme.fonts.$xs};
  line-height: 16px;
  margin-top: 10px;
`;
