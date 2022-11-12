import styled from 'styled-components';

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 50px 0;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 34px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const SliderText = styled.span`
  font-size: ${({ theme }) => theme.fonts.$xs};
`;

export const SliderBar = styled.div`
  position: relative;
  flex: 1;
  height: 5px;
`;

export const SliderInput = styled.input`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 10px;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    z-index: 10;
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.$secondary};
    border-radius: 100%;
    -webkit-appearance: none;
  }
`;

export const SliderStyleBar = styled.div<{ value: number }>`
  position: absolute;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    ${({ theme, value }) =>
      `to right,
      ${theme.colors.$secondary} 0,
      ${theme.colors.$secondary} ${value * 10}%,
      ${theme.colors.$gray} ${value * 10}%,
      ${theme.colors.$gray} 100%`}
  );
  border-radius: 10px;
`;
