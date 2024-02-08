import { Link } from "react-router-dom"
import "./style.css"
const SobrePretalabPage =()=>{

    return (
        <>
        <section className="section-principal"> 
        <div className="sobre-pretalab"> 
        <h1>Sobre Pretalab</h1>
        <h3>Um link entre mulheres negras e a tecnologia</h3>
        <p>
  A PretaLab é uma iniciativa do Olabi, organização social que trabalha para trazer diversidade para a tecnologia e inovação. Se quiser colaborar com alguma dessas frentes de ação, entre em contato. 
        </p>
       <p>
       Uma inicativa construída como uma plataforma que conecta mulheres negras que são ou gostariam de ser da tecnologia, por meio dos nossos ciclos formativos, rede de profissionais, mercado de trabalho, consultorias e estudos.
       </p>
    
        
<Link to="https://www.uol.com.br/ecoa/reportagens-especiais/causadores-silvana-bahia/#page3" target="_blank">Leia mais aqui</Link> 
        </div>

        <div className="imagem-silvana">
            <img src="/silvana.webp" alt="Silvana Bahia, fundadora da pretalab"/>
            <h6>Fonte: Uol</h6>
        </div>
        </section>
        </>
    )
}

export default SobrePretalabPage