import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;
    margin: 0 auto;
    background: #299B01;
    color: white;
    width: 250px;
    height: 65px;
    border-color: transparent;
    font-size: inherit;
    font-family: inherit;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &: hover {
        background: #fff;
        color: #299B01;
        border-color: #299B01;
    }
`;
