
import './style.css'

const CardEstudante = ({ fotoUrl, nome, comidaQueNaoGosta, experienciaPositiva }) => {




    return (
        <div className='card'>
            <img src={fotoUrl} alt="" />


            <div className='container'>
                <h4>{nome}</h4>

                <p>
                    Comida que não gosta:
                    {comidaQueNaoGosta}
                </p>

                <p>
                    Uma Experência positiva:
                    {experienciaPositiva}
                </p>
            </div>

        </div>



    )
}

export default CardEstudante; 