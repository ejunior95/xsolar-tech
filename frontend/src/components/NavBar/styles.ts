import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh;
  background-color: #dcdde1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 2px 2px 5px 6px rgba(0,0,0,0.2);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 2px 2px 5px 6px rgba(0,0,0,0.2);  /* Firefox 3.5 - 3.6 */
  box-shadow: 2px 2px 5px 6px rgba(0,0,0,0.2);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  z-index: 10;

  img {
    margin-left: 1vw;
    width: 10vw;
    cursor: pointer;
  }

  .container-itens-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80vw;
  }

  a {
    text-decoration: none;
    color: #2f3640;
  }

  .container-itens-menu ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1vw;
    color: #2f3640;
  }

  .container-itens-menu ul li {
    font-size: 1rem;
    margin-left: 1vw;
    list-style: none;
    padding: 8px;
    cursor: pointer;
    border-radius: 5px;
    transition: .2s ease-in-out;
    border: 1px solid #dcdde1;
  }

  .container-itens-menu ul li:hover {
    background-color: #2f3640;
    color: #ffffff;
    border: 1px solid #7f8fa6;
    transition: .2s ease-in-out;

    a {
    color: #ffffff;
    }
  }

  .container-itens-menu ul li.active {
    background-color: #2f3640;
    color: #ffffff;
    border: 1px solid #7f8fa6;
    transition: .2s ease-in-out;
    a {
      color: #ffffff;
    }
  }

`;
