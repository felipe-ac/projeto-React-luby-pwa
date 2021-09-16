// Default Imports
import styled from 'styled-components'

// Styled-Components

export const Container = styled.div`
    width: 100%;

    h1 {
        font-size: 22px;
        font-weight: bold;
        margin-top: 20px;
        padding-left: 20px;
        position: relative;
    }

    h1::after {
        content: "";
        width: 10px;
        height: 35px;
        background-color: #ffce00;
        border-radius: 0 12px 12px 0;
        position: fixed;
        left: 0;
        margin-top: -5px;
        position: absolute;
    }

    p {
        margin-top: 10px;
        padding-left: 20px;
        padding-right: 20px;
    }
    
`