// Default Imports
import styled from 'styled-components'

// Style-components

export const Container = styled.main`
    min-width:420px;
    max-width: 420px;
    height: 100vh;
    background: linear-gradient(120deg, #252525, #444);
    background-color: #292929;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    display: flex;
    overflow: auto;
    box-sizing: border-box;
    position: relative;
    padding-top: 50px; 
    padding-bottom: 80px; 
    
    flex-direction: column;
    justify-content: top;
    cursor: default;

    h1, p {
        margin: 0;
        padding: 0;
    }
`

