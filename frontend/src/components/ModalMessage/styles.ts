import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  z-index: 9999;
  background-color: rgba(0, 0, 0,0.3);

  .container-modal {
      width: 20%;
      height: 10vh;
      background-color: #ffffff;
  }

`;
