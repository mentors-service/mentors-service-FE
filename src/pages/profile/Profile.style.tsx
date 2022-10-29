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
  font-size: ${(props) => props.theme.fonts.$base};
  line-height: 22px;
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
