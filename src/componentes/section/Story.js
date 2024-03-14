import australia from '../../Image/story/australia.svg'
import cargo from '../../Image/story/cargo.svg'
import replay from '../../Image/story/replay.svg'
import ambu from '../../Image/story/ambu.svg'
import snct from '../../Image/story/snct.svg'
import into from '../../Image/story/into.svg'
import Pictures from './Pictures'
import styles from './Story.module.css'

function Story(){
    return(
        <div className={styles.story} id='Story'>
            <h1> Minha história </h1>
            <section>
            <Pictures
                img={into}
                text="Fui competidora da equipe Albatroid - tricampeã do torneio de robótica First Lego League (região Centro-Oeste)."
            />
            <Pictures
                img={australia}
                text="Participei de um campeonato internacional na Austrália, onde fomos a equipe brasileira com maior pontuação no Desafio do Robô." 
            />
            <Pictures
                img={replay}
                text="Programo desde os 14 anos e sou apaixonada pela robótica educacional."
            />
            <Pictures
                img={cargo}
                text="Participei de campeonatos nacionais no Rio de Janeiro e em São Paulo."
            />
            <Pictures
                img={ambu}
                text="Dentro da Startup AXOLOTLS, programei em C++ e gerenciei projetos com o SCRUM."
            />
            <Pictures
                img={snct}
                text="Já fiz voluntariados como expositora no evento “NASA Science Days” e na Semana Nacional de Ciência e Tecnologia em três edições."
            />
            </section>
        </div>
    )
}

export default Story