// Default Imports
import styled from 'styled-components'

// Styled-Components

export const Container = styled.nav`
    bottom: 0;
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    color: #000;
    border-radius: 15px 15px 0 0;
    position: fixed;
    min-width:420px;
    max-width: 420px;
    `

export const MenuList = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 10px 0 10px 0;
    margin: 0;
`

export const MenuItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    div:last-child {
        border-bottom: 0;
        transition: 0.5s;
    }

    :hover {
        div:first-child {
            
        }

        div:last-child {
            box-sizing: content-box;
            border-bottom: 1px solid black;
            margin-bottom: 5px;
        }
    }

    
`

export const MenuItemIcon = styled.div`
    width: 40px;
    height: 40px;
    background-image: url("${props => `${props.src}`}");
    background-size: 35px 35px;
    background-repeat: no-repeat;
`