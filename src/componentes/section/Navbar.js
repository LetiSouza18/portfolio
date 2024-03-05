import styles from './Navbar.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.linkedin.com/in/let%C3%ADcia-souza-santana-marinho-605b601a7/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/LetiSouza18'><FaGithub size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar