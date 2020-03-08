import styled from 'styled-components'
import logo from '../../images/logo.svg'
import logoMobile from '../../images/logo@2x.png'

export const HomeText = styled.div`
    position: absolute;
    width: 36%;
    height: 70%;
    left: 12%;
    top: 23%;
    font-size: 1.4em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    line-height: 137.19%;
    color: #FFFFFF;

    @media screen and (max-width: 1439px) {
        position: absolute;
        align-self: center;
        width: 50%;
        height: 40%;
        left: 2%;
        top: 20%;
        font-weight: 300;
        font-size: 1.2em;
    }

    @media screen and (max-width: 767px){
        position: absolute;
        align-self: center;
        width: 290%;
        height: 40%;
        left: 9%;
        top: 20%;
        font-size: 4em;
    }
`
export const LogoArea = styled.div`
    position: absolute;
    width: 35%;
    height: 65%;
    left: 55%;
    top: 25%;
    opacity: 0.7;
    background-image: url("${logo}");
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 1439px){
        width: 40%;
        height: 40%;
        left: 55%;
        top: 28%;
        opacity: 0.7;
        background-image: url("${logoMobile}");
    }
    @media screen and (max-width: 767px){
        opacity: 0;
    }
`
export const CollabButton = styled.button`
    display: flex;
    flex-direction: row;
    padding: 16px 28px;
    position: absolute;
    width: 400px;
    height: 60px;
    left: 12%;
    top: 95%;
    background: #F2F2F2;
    box-shadow: 3px 3px 0px #F5364C;
    border-radius: 10px;

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.6em;
        margin: 1% 7%;
        color: #F5364C;
    }
    
    @media screen and (max-width: 767px){
        width: 1280px;
        height: 180px;
        left: 40%;
        top: 270%;
        box-shadow: 10px 10px 0px #F5364C;
        p{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 60px;
            margin: 2px 200px;
            color: #F5364C;
        }
    }

    @media screen and (max-width: 1439px){
        left: 2%;
    }
    
`