import styled from 'styled-components';

export const MeContainer = styled.div`
  padding: 25px 25px 0;
`;

export const MyProfileWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageTemp = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.$gray};
  border-radius: 100%;
`;

export const ImageChangeButton = styled.button`
  height: 34px;
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
  padding: 5px 10px;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.$secondary_dark};
  }
`;

export const MyProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MyProfileChangeButton = styled.button`
  padding: 5px 10px;
  height: 34px;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.$secondary_dark};
  }
`;

export const MyActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const MyActivityList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const MyActivityItem = styled.li`
  width: 100%;
`;

export const MyActivityButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  background: linear-gradient(${({ theme }) => theme.colors.$primary}, ${({ theme }) => theme.colors.$white});
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const MyActivityTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.$sm};
  font-weight: 700;
`;

export const MyActivityContent = styled.p``;

export const MyActivityCreatedAt = styled.time`
  font-size: ${({ theme }) => theme.fonts.$xxs};
  opacity: 0.5;
`;
