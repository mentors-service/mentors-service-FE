import styled from 'styled-components';

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 50px 0 50px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 34px;
  border-radius: 10px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.$white};
  background: ${({ theme }) => theme.colors.$secondary};
`;
