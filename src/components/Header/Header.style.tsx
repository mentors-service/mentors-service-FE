import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const LogoName = styled.h1`
  font-size: ${(props) => props.theme.fonts.$lg};
  background: linear-gradient(${({ theme }) => theme.colors.$primary}, ${({ theme }) => theme.colors.$secondary});
  color: linear-gradient(red, blue);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderButton = styled.button`
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
  height: 34px;
  padding: 5px 10px;
`;

export const HeaderButtonText = styled.span`
  color: ${({ theme }) => theme.colors.$white};
`;
