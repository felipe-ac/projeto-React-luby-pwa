// Default Imports
import styled from 'styled-components'

// Styled-Components

export const Container = styled.div`
    width: 100%;
    background-color: #383838;
    text-align: center;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`
export const Number = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 0;
    cursor: pointer;
    transition: 0.5s;

    :hover {
        color: #ffce00;
    }

    span:nth-child(1) {
        font-size: 40px;
        font-weight: bold;
    }
`