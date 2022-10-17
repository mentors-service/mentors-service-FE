import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  padding: 0 0 0 25px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  margin-top: 25px;
  margin-left: 58px;
`;

export const Name = styled.div`
  margin-bottom: 34px;
  font: ${(props) => props.theme.font};
`;

export const Description = styled(Name)`
  width: 175px;
  margin: 0;
`;

export const MentorSkills = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const Mentor = styled(Name)`
  margin-right: 70px;
`;

export const Skills = styled(Name)``;

export const ProfileBtn = styled.button`
  display: inline-block;
  max-width: fit-content;
  height: 32px;
  padding: 0px 8px 0px 8px;
  margin: 120px 0 0 25px;
  font: ${(props) => props.theme.font};
  background: #ebebeb;
  border-radius: 10px;
`;
