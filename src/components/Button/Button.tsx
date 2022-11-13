import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 10px;
  margin: 120px 0 0 25px;
  font-size: ${(props) => props.theme.fonts.$base};
  font-weight: 400;
  line-height: 22px;
  background: #ebebeb;
  border-radius: 10px;
`;

type TButtonProps = {
  children: string;
};

const Button = ({ children }: TButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
