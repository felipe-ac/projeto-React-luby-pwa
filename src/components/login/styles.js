// Default Imports
import styled from 'styled-components'

// Styled-components

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: black;
`
export const Logo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
`
export const Input = styled.input`
    height: 45px;
    border-radius: 10px;
    border: 0;
    width: 90%;
    margin-top: 30px;
    color: #1f1f1f;
    font-size: 20px;
    box-sizing: border-box;
    text-align: center;
`

export const Button = styled.div`
    width: 50%;
    height: 45px;
    margin-top: 15px;
    border-radius: 10px;
    border: 0;
    background-color: #ffce00;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 700;

    :hover {
        width: 90%;
    }

    span:nth-child(2) {
        width: 25px;
        height: 25px;
        background-image: url("/img/icons/login-arrow.png");
        background-size: 25px 25px;
        background-repeat: no-repeat;
        background-position: center;
        margin-left: 10px;
    }
`
export const Error = styled.div`
    visibility: collapse;
    //background-color: #bf3728;
    color: #bf3728;
    margin-top: 15px;
    width: 90%;
    font-size: 15px;
    font-weight: 900;
    padding: 10px 0 10px 0;
    text-align: center;
    border-radius: 10px;
    transition: 0.3s;
`