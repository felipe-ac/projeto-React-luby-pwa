// Default Imports
import styled from 'styled-components'

// Styled-Components

export const Container = styled.div`
    width: 100%;
    margin-top: 20px;
`
export const Name = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 22px;
    padding-left: 20px;
    position: relative;

    ::after {
        content: "";
        width: 10px;
        height: 35px;
        background-color: #ffce00;
        border-radius: 0 12px 12px 0;
        position: absolute;
        left: 0;
        margin-top: -5px;
    }

`
export const Email = styled.div`
    padding-left: 20px;
`

export const Location = styled.div`
    padding-left: 20px;
`