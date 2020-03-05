import React, { Component } from 'react'
import './header.css'

export class Header extends Component {
    render() {
        return (
            <div>
                <span className="titlebox">HAVE YOU HEARD?</span>
                <span className="aboutus">Sobre nos</span>
                <span className="howtoplay">Como jogar</span>
                <span className="collaborate">Colaborar</span>
                <span className="es">ES</span>
                <span className="slash">/</span>
                <span className="pt">PT</span>
                    <div className="footer">
                        <span className="footertext">Um jogo sobre mal entendidos</span>
                    </div>
            </div>
        )
    }
}

export default Header
