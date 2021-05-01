import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  input {
      background-color: #3C62B1;
      border: 2px solid #3C62B1;
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
  input:hover {
      background-color: transparent;
      color: #3C62B1
  }
`;
