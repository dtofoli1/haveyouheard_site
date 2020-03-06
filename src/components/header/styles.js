import styled from 'styled-components'

export const Title = styled.a`
    position: absolute;
    width: 35%;
    height: 10%;
    left: 12%;
    top: 9%;
    font-family: Aleo;
    font-style: normal;
    font-weight: normal;
    font-size: 6vh;
    line-height: 48px;
    color: #FED613;

    @media screen and (max-width: 700px){
        left: 16px;
        top: 150px;
        width: 1200px;
        line-height: 20px;
        font-size: 120px;
    }
`

export const AboutUs = styled.a`
    position: absolute;
    width: 12%;
    height: 5%;
    left: 55%;
    top: 10.5%;
    font-family: Aleo;
    font-style: normal;
    font-weight: normal;
    font-size: 2em;
    line-height: 29px;
    color: #F2F2F2;

    @media screen and (max-width: 700px){
        opacity: 0;
    }
`
export const HowToPlay = styled(AboutUs)`
    position: absolute;
    width: 12%;
    height: 5%;
    left: 66%;
`
export const Collaborate = styled(AboutUs)`
    position: absolute;
    width: 12%;
    height: 5%;
    left: 79%;
`
export const Spanish = styled.a`
    position: absolute;
    width: 27px;
    height: 29px;
    left: 94%;
    top: 10.5%;
    font-family: Aleo;
    font-style: normal;
    font-weight: normal;
    font-size: 2em;
    line-height: 29px;
    text-align: right;
    color: #F2F2F2;

    @media screen and (max-width: 700px){
        opacity: 0;
    }
`

export const Portuguese = styled(Spanish)`
    position: absolute;
    width: 30px;
    height: 29px;
    left: 97%;
`
export const BotBar = styled.div`
    position: absolute;
    height: 5%;
    width: 100%;
    left: 0px;
    top: 16%;
    background: #E0E0E0;

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.7em;
        line-height: 28px;
        color: #252C4A;
        margin: 0.3% 12.1%;
    }

    @media screen and (max-width: 700px){
        opacity: 0;
    }
`