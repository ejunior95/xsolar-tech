import styled from 'styled-components';

export const Container = styled.div`

    .container-cards{
        width: 80%;
        margin-left: 10%;
        margin-top: 13vh;
        height: 85vh;
        display: grid;
        grid-template-areas:
        'header header'
        'card-left card-right';
        grid-gap: 10px;
    }

    .item1,
    .item2,
    .item3 {
        background-color: lightgray;
        border-radius: 10px;
        box-sizing: border-box;
    }

    .item1 { grid-area: header; }
    .item2 { grid-area: card-left; }
    .item3 { grid-area: card-right; }


`;
