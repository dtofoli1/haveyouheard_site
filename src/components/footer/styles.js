import styled from 'styled-components'
import footerimg from '../../images/footerimg.svg'
import footerimg_full from '../../images/footerimg_full.png'

export const FooterImage = styled.div`
    position: absolute;
    height: 30%;
    width: 100%;
    left: 0px;
    top: 105%;
    background-image: url("${footerimg}");
    background-size: cover;
    opacity: 0.8;

    @media screen and (max-width: 1439px){
        height: 20%;
        width: 169.5%;
        top: 150%;
    }

    @media screen and (max-width: 767px){
        width: 1300px;
        height: 400px;
        top: 2200px;
        background-image: url("${footerimg_full}");
    }
`