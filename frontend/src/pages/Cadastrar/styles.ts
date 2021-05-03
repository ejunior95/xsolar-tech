import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin-left: 10%;
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
        padding: 5vh 0vh 5vh 0vh;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .btn-salvar {
        width: 30%;
    }

    .container-endereco {
        width: 100%;
        background-color: #718093;
        border-radius: 8px;
        color: #ffffff;
    }

`;
