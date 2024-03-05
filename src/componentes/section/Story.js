
import into from '../../Image/story/into.svg'
import Pictures from './Pictures'

function Story(){
    return(
        <div className="">
            <h1> Minha história </h1>
            <Pictures
                img={into}
                text="Fui competidora da equipe Albatroid - tricampeã do torneio de robótica First Lego League (região Centro-Oeste)."
            />
        </div>
    )
}

export default Story