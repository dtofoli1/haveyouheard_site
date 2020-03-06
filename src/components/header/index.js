import React, { Component } from 'react'
import { Title, AboutUs, Collaborate, HowToPlay, Spanish, Portuguese, BotBar} from './styles'

export class Header extends Component {
    render() {
        return (
            <div>
                <Title>
                    HAVE YOU HEARD?
                </Title>
                <AboutUs>
                    Sobre nos
                </AboutUs>
                <HowToPlay>
                    Como jogar
                </HowToPlay>
                <Collaborate>
                    Colaborar
                </Collaborate>
                <Spanish>
                    ES
                </Spanish>
                <Portuguese>
                    PT
                </Portuguese>
                    <div>
                        <BotBar>
                            Um jogo sobre mal entendidos
                        </BotBar>
                    </div>
            </div>
        )
    }
}

export default Header
