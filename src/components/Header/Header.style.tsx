import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19.5px 25px 19.5px 25px;
`;

export const LogoName = styled.h1`
  font-size: ${(props) => props.theme.fonts.$base};
  font-weight: 700;
  line-height: 21px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
