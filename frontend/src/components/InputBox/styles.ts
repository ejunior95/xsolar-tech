import styled from 'styled-components';

export const Container = styled.div`
  height: 30px;
  width: 100%;
  position: relative;
`;
  
export const Span = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    background: #000000;
    width: 100%;
    height: 2px;

    &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #013399;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .5s ease-in-out;
    } 

`;

export const Input = styled.input`
    
    position: absolute;
    width: 100%;
    background-color: transparent;
    border: none;
    box-shadow: none;
    font-size: 18px;
    transition: .5s ease-in-out;
    

    &:focus ~ ${Span}:before {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform .5s ease-in-out;
    }

    &:valid ~ ${Span}:before {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform .5s ease-in-out;
    } 
    
`;

export const Label = styled.label`
    position: absolute;
    color: #000000;
    pointer-events: none;
    display: block;
    transition: .3s ease-in-out;
  ${Input}:focus ~ & {
    transform: translateY(-30px);
    color: #013399;
    font-size: 12px;
  }
  ${Input}:valid ~ & {
    transform: translateY(-30px);
    color: #013399;
    font-size: 12px;
  }

  `;

