import React, { Component } from 'react'
import { HomeText, LogoArea, CollabButton } from './styles'

class Home extends Component {
    render() {
        return(
            <div>
                <HomeText>
                    <p>O jogo Have You Heard foi idealizado durante o 
                    Hackathon TodosXFakes do Goethe Institut, realizado 
                    em São Paulo em Outubro de 2019. </p>
                    
                    <p>O Hackathon foi parte do evento TodosXFakes que tinha 
                    o intuito de fomentar a discussão sobre Fake News. 
                    Foram criados diversos jogos que ao mesmo tempo 
                    entretém o usuário e o ajuda na conscientização sobre 
                    notícias falsas.</p>
                    
                    <p>E agora você também pode ajudar a fazer esse jogo 
                    ainda mais interessante! Viu alguma notícia interessante 
                    e gostaria de colocar ela no jogo? 
                    Clica no botão abaixo e 
                    compartilha com a gente</p>
                </HomeText>
                <LogoArea />
                <CollabButton>
                    <p>Colaborar - Enviar uma notícia</p>
                </CollabButton>
            </div>
        )
    }
}

export default Home