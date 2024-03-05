import styles from './Skills.module.css'
import javascript from '../../Image/skills/javascript.svg'
import html from '../../Image/skills/html.svg'
import css from '../../Image/skills/css.svg'
import react from '../../Image/skills/react.svg'
import bootstrap from '../../Image/skills/bootstrap.svg'

function Skills(){
    return(
        <div className={styles.skill}id='Skills'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais competências: </p>
            <div>
                <img alt="" src={html}/>
                <img alt="" src={css}/>
                <img alt="" src={javascript}/>
                <img alt="" src={react}/>
                <img alt="" src={bootstrap}/>
            </div>
        </div>
    )
}

export default Skills