import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;
    overflow: -moz-scrollbars-vertical;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    video {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    background-position: fixed;
    pointer-events: none;
    background-repeat: repeat;
    object-fit: fill;
  }

    .container-login {
        width: 40vw;
        height: 80vh;
        background-color: rgba(255,255,255,0.4);
        border-radius: 10px;
        -webkit-box-shadow: 2px 2px 5px 6px rgba(0,0,0,0.1);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow: 2px 2px 5px 6px rgba(0,0,0,0.1);  /* Firefox 3.5 - 3.6 */
        box-shadow: 2px 2px 5px 6px rgba(0,0,0,0.1);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
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
