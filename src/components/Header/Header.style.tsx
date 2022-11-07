import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const LogoName = styled.h1`
  font-size: ${(props) => props.theme.fonts.$lg};
  font-weight: 700;
  background: linear-gradient(${({ theme }) => theme.colors.$primary}, ${({ theme }) => theme.colors.$secondary});
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderButton = styled.button`
  height: 34px;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
`;

export const HeaderButtonText = styled.span`
  color: ${({ theme }) => theme.colors.$white};
`;
