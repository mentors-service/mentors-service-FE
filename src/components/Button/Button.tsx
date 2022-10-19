import styled from 'styled-components';

const StyledButton = styled.button`
  max-width: fit-content;
  padding: 0px 8px 5px 8px;
  background: #ebebeb;
  border-radius: 10px;
  display: inline-block;
  height: 32px;
  margin: 120px 0 0 25px;
  font-weight: 400;
  font-size: ${(props) => props.theme.fonts.$base};
  line-height: 22px;
`;

const Button = ({ children }: any) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
