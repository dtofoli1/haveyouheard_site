import styled from 'styled-components'
import footerimg from '../../images/footerimg.svg'

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
        top: 120%;
    }
`