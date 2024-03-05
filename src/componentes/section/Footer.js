import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.linkedin.com/in/let%C3%ADcia-souza-santana-marinho-605b601a7/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/LetiSouza18'><FaGithub size={30}/></a></li>
            </ul>
            <p>contato.leticiamarinho0@gmail.com</p>
            <p>Letícia Souza © 2024</p>
        </div>
    )
}

export default Footer