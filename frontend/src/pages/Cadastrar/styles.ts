import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin-left: 10%;
    height: 100vh;
    background-color: #ffffff;
    padding-top: 15vh;
  
    
    form {
        width: 80%;
        margin-left: 10%;
    }

    .container-inputs {
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .container-buttons {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .btn-salvar {
        width: 30%;
    }

`;
