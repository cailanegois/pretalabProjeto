import './style.css'
import CardEstudante from '../CardEstudante'

const ListaEstudantes = ({lista}) => {

    return (
        <div className='wrapper'>
            {lista.map ((estudante, index) => (
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

