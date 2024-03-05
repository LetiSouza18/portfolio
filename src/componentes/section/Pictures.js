import styles from './Pictures.module.css'


function Pictures({img, text}){
    return(
        <div className={styles.pictures}>
            <img alt="" src={img} size={30}></img>
            <p>{text}</p>       
        </div>
    )
}

export default Pictures