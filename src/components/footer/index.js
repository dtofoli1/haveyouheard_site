import React, { Component } from 'react'
import footerimg from '../../images/footerimg.svg'

import './footer.css'

export class footer extends Component {
    render() {
        return (
            <div className="base">
                <img src={footerimg} alt="personagens espalhados no rodapé" width="100%"/>
            </div>
        )
    }
}

export default footer
