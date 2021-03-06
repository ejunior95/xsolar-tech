import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .btn-login {
      background-color: #013399;
      border: 2px solid #013399;
      color: #ffffff;
      font-size: 18px;
      width: 100%;
      height: 6vh;
      text-align: center;
      border-radius: 50px;
      cursor: pointer;
      transition: .2s ease-in-out;
      font-weight: 700;
  }
  .btn-login:hover {
      background-color: rgba(255,255,255,0.5);
      color: #013399;
  }

  .btn-form {
      background-color: #00a8ff;
      border: 2px solid #00a8ff;
      color: #ffffff;
      font-size: 18px;
      width: 100%;
      height: 6vh;
      text-align: center;
      border-radius: 20px;
      cursor: pointer;
      transition: .2s ease-in-out;
      font-weight: 700;
  }
  
  .btn-form:disabled {
      background-color: #dcdde1;
      border: 2px solid #7f8fa6;
      color: #7f8fa6;
      cursor: not-allowed;
  }

`;
