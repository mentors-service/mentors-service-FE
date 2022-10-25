import styled from 'styled-components';

export const MeContainer = styled.div`
  padding: 25px 25px 0;
`;

export const Temp = styled.div`
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
`;

export const MyProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MyProfileChangeButton = styled.button`
  height: 34px;
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
  margin-left: auto;
  width: 72px;
`;
