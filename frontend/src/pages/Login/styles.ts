import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: #7474BF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .container-login {
        width: 50vw;
        height: 80vh;
        background-color: #ffffff;
        border-radius: 10px;
        -webkit-box-shadow: 2px 2px 5px 6px rgba(0,0,0,0.2);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow: 2px 2px 5px 6px rgba(0,0,0,0.2);  /* Firefox 3.5 - 3.6 */
        box-shadow: 2px 2px 5px 6px rgba(0,0,0,0.2);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-evenly;
    }

    .container-textos {
    }

    .titulo,
    .subtitulo {
        text-align: center;
    }

    .container-inputs {
        width: 80%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .container-inputs form {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .container-logo {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo {
        width: 10vw;
    }
`;
