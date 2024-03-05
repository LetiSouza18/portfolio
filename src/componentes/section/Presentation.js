import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
        <div id='Presentation' className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou a Letícia Souza</h1>
            <p>
                Graduanda em Computação Licenciatura pela Universidade de Brasília (UNB); <br/>
                no momento estou cursando a formação em tecnologia <br/>
                (Desenvolvimento Full Stack) na escola DNC.
            </p>
            <ButtonA text='Conecte-se comigo!' link='https://www.linkedin.com/in/let%C3%ADcia-souza-santana-marinho-605b601a7/'></ButtonA>
        </div>
    )
}

export default Presentation