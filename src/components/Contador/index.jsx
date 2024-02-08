import Botao from "../Botao"
import "./style.css"
import { useState } from "react"

// um contador usando usestate 
 
const Contador = () => {

    const [num, setNum] = useState(0);
  
    const somar = () => {
        setNum ((valorAnterior) => valorAnterior +1)
    }

   const subtrair = () =>{

    setNum ((valorAnterior) => valorAnterior - 1)

   }

    return (
    <section className="contador-section"> 
    <h1>Contador</h1>
    <main className="contador-main">
    <Botao texto= " + " acao= {somar} />
    <h2> {num} </h2> 
    <Botao texto= " - " acao={subtrair}/>
    </main>
   
    </section>
    )
}

export default Contador;

