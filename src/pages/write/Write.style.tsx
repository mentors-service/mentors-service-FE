import styled from 'styled-components';

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 50px 0 50px;
  button {
    width: 100%;
    height: 26px;
    margin-bottom: 25px;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #ffffff;
    background: #0bbfad;
    border-radius: 10px;
  }
  input {
    height: 30px;
    padding: 5px 10px;
    background: #ffffff;
    border: 2px solid #ebebeb;
    border-radius: 10px;
  }
  input::placeholder {
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ErrorMessage = styled.p``;
