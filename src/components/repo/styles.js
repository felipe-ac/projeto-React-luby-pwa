// Default Imports
import styled from 'styled-components'

// Styled-Components

export const Container = styled.section`
    width: 100%;
    cursor: default;

    :last-of-type {
        border: 0;
    }
`
export const Title = styled.div`
        padding: 0 20px 0 20px;
        font-size: 15px;
        line-height: 30px;
        position: relative;
        padding-top: 20px;
        font-weight: 900;

     ::after {
        content: "";
        width: 5px;
        height: 25px;
        background-color: #ffce00;
        border-radius: 0 5px 5px 0;
        position: absolute;
        left: 0;
        margin-top: 2px;
    }

`

export const Desc = styled.div`
        padding: 0 20px 0 20px;
        font-size: 15px;
        line-height: 30px;
`

export const More = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    border-bottom: 1px solid #404040;
    padding-bottom: 20px;
`

export const FavCounter = styled.div`
    display: flex;

    div {
        width: 30px;
        height: 30px;
        background-image: url("/img/icons/star.png");
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: center;
    }

    span {
        margin-left: 5px;
        line-height: 30px;
    }
`
export const Lock = styled.div`
    display: flex;

    div:first-child {
        width: 30px;
        height: 30px;
        background-image: url("img/icons/lock-green.png");
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: center;
    }
    div:last-child {
        width: 30px;
        height: 30px;
        background-image: url("img/icons/lock-red.png");
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: center;
    }
`