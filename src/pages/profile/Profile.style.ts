import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  padding: 0 0 0 25px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileDescription = styled.div`
  margin-left: 58px;
  margin-top: 25px;
`;

export const Name = styled.div`
  margin-bottom: 34px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
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

export const ProfileBtn = styled(Name)`
  padding: 8px 8px 0 8px;
  height: 32px;
  background: #ebebeb;
  border-radius: 10px;
  max-width: fit-content;
  margin: 120px 0 0 25px;
  display: inline-block;
`;
