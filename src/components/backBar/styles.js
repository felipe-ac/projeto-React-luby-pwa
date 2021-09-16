// Default Imports
import styled from 'styled-components'

// Styled-Components

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    background-color: #1f1f1f;
    font-weight: bold;
    position: fixed;
    top: 0;
    z-index: 1;
    min-width:420px;
    max-width: 420px;
`
export const Back = styled.div`
    width: 50px;
    height: 50px;
    background-image: url("/img/icons/back-arrow.png");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: left center;
    left: 20px;
    cursor: pointer;
    position: absolute;
    transition: 0.2s;

    :hover {
        left: 15px;
    }
`
export const User = styled.div`
    font-weight: 600;
    line-height: 50px;
`
