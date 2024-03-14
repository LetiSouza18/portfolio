import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ['a Letícia Souza!', 'desenvolvedora', 'apaixonada por tecnologia'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }


    return(
        <div id='Presentation' className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p>
                Graduanda em Computação Licenciatura pela Universidade de Brasília (UNB) e a <br/>
                caminho de me tornar uma desenvolvedora Full Stack; para isso, aprofundo-me <br/>
                diariamente em estudos sobre a criação de aplicações e softwares que cumpram<br/> 
                os requisitos desejados com eficiência. Tenho como objetivo atuar na área de <br/> 
                desenvolvimento de soluções para web dentro de uma empresa na qual eu possa <br/>
                crescer e aprender com profissionais experientes.
            </p>
            <ButtonA text='Conecte-se comigo!' link='https://www.linkedin.com/in/let%C3%ADcia-souza-santana-marinho-605b601a7/'></ButtonA>
        </div>
    )
}

export default Presentation