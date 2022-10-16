import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19.5px 5px 19.5px 25px;
`;

export const LogoName = styled.h1`
  font: ${(props) => props.theme.font};
  font-weight: 700;
`;

export const BtnWrapper = styled.div``;

export const HeaderBtn = styled.button`
  margin-right: 20px;
`;
