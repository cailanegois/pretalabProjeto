import './style.css'
import {estudantes} from '../../data/estudantes'
import CardEstudante from '../CardEstudante'

const ListaEstudantes = () => {

    return (
        <div className='wrapper'>
            {estudantes.map ((estudante, index) => (
                <CardEstudante 
                key={index}
                nome={estudante.nome}
                    fotoUrl={estudante.foto}
                    comidaQueNaoGosta={estudante.comidaQueNaoGosta}
                    experienciaPositiva={estudante.experienciaPositiva}
                    /> 
           
                       
           ))}


              
        
        </div>
    ) 
}

export default ListaEstudantes

