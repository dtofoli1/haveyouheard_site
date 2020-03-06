import styled from 'styled-components'

export const HeaderArea = styled.div`
    width: 100vh;
    height: 142px;
`

export const Title = styled.a`
    position: absolute;
    width: 459px;
    height: 48px;
    left: 200px;
    top: 80px;
    font-family: Aleo;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
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
    width: 103px;
    height: 29px;
    left: 788px;
    top: 100px;
    font-family: Aleo;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #F2F2F2;

    @media screen and (max-width: 700px){
        opacity: 0;
    }
`
export const HowToPlay = styled(AboutUs)`
    position: absolute;
    width: 122px;
    height: 29px;
    left: 921px;
`
export const Collaborate = styled(AboutUs)`
    position: absolute;
    width: 107px;
    height: 29px;
    left: 1070px;
`
export const Spanish = styled.a`
    position: absolute;
    width: 27px;
    height: 29px;
    left: 1400px;
    top: 100px;
    font-family: Aleo;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
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
    left: 1440px;
`
export const BotBar = styled.span`
    position: absolute;
    height: 45px;
    width: 1920px;
    left: 0px;
    top: 142px;
    background: #E0E0E0;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #252C4A;

    @media screen and (max-width: 700px){
        opacity: 0;
    }
`