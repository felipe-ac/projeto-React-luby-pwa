// Default Imports
import styled from 'styled-components'

// Styled-Components

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: #1f1f1f;
    position: fixed;
    top: 0;
    min-width:420px;
    max-width: 420px;
    padding-bottom: 80px;
`
export const User = styled.div`
    font-weight: 600;
    margin-top: 15px;
    margin-left: 20px;
`
export const Logoff = styled.div`
    width: 60px;
    height: 20px;
    background-image: url("/img/icons/logout.png");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position-x: right;
    margin-top: 15px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.5s;

    :hover {
        color: red;
    }
`