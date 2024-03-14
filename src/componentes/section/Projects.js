import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from './Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import api from '../../Image/projects/api.svg'
import ccxp from '../../Image/projects/ccxp.svg'
import portfolio from '../../Image/projects/portfolio.svg'

function Projects(){
    return(
        <div className={styles.projects}id='Projects'>
            <h1>Projetos</h1>
            <Card 
            img={api}
            title="Consumo de API"
            tech="HTML, Bootstrap e JavaScript nível avançado"
            description="Desenvolvimento de uma interface que fornece dados sobre endereço por meio da api VIACEP."
            repo="https://github.com/LetiSouza18/Api-Teste"
            site="https://api-teste-lemon.vercel.app"
            />
            <Card
            img={ccxp}
            title="Landing Page"
            tech="HTML, CSS e JavaScript nível intermediário"
            description="Criação de uma landing page para divulgação do evento CCXP."
            repo="https://github.com/LetiSouza18/DesafioCCXP"
            site="https://desafio-ccxp-sigma.vercel.app"
            />
            <Card
            img={lpdnc}
            title="Landing Page"
            tech="HTML, CSS e JavaScript nível iniciante"
            description="Criação de uma landing page para o lançamento da formação em tecnologia da escola DNC."
            repo="https://github.com/LetiSouza18/ProjetoLandingPage"
            site="https://landing-page-dnc.vercel.app"
            />
            <Card
            img={portfolio}
            title="Portfólio"
            tech="HTML e CSS"
            description="Criação de um portfólio profissional."
            repo="https://github.com/LetiSouza18/ProjetoPortfolioProfissional"
            site="https://projeto-portfolio-profissional.vercel.app"
            />
        </div>
    )
}

export default Projects