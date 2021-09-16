// Default Imports
import styled from 'styled-components'

// Styled-Components

export const SubContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #404040;
    transition: 0.3s;
    cursor: pointer;

    :first-of-type {
        top: 0;
    }

    :last-of-type {
        bottom: 0;
        border: 0;
    }

    :hover {
        background-color: #383838;
    }

    ::after {
        content: "";
        width: 7px;
        height: 27px;
        background-color: #ffce00;
        border-radius: 0 30px 30px 0;
        position: absolute;
        left: 0;
        margin-top: 37px;
    }

    div {
        font-weight: bolder;
        line-height: 100px;
    }


`

export const Pic = styled.img`
    width: 70px;
    height: 70px;
    border: 2px solid #fff;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 13px;
`

export const Go = styled.div`
    width: 70px;
    height: 100px;
    background-image: url("/img/icons/back-arrow.png");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: left center;
    margin-right: 20px;
    transform: rotate(180deg);
`

