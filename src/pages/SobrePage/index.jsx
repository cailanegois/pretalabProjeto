
import "./style.css"
import { Link } from "react-router-dom";

const SobrePage = () => {

    return (
        <>

            <section className="sobre-geral">
                <main className="texto-sobre"> 
                <h1> Sobre o projeto </h1>
                <p> O projeto de portfólio nasceu do módulo de react da formação em Front-end Iniciante da Pretalab. O Projeto teve com aplicar a união dos módulos de Html, CSS, Javascript e o próprio react, usando conceitos como hooks (UseState e UseEffect), requisições a API com Axios, criação de componentes, funções, arrays e entre outros. Além do suporte técnico, a Pretalab também possibilitou o desenvolvimento de softs skills com aulas de autoconhecimento, comunicação assertiva, pitch, resolução de problemas. Para mim, Pretalab é um rede de mulheres negras que acreditam na tecnologia e no empoderamento negro, um quilombo que reune mulheres espalhadas pelo Brasil com propósito de aprender.
              
                 </p>
                 <Link to="/sobre/pretalab">Saiba sobre Pretalab</Link> 
                </main>
                
                   
                 
            </section>
        </>
    )

}

export default SobrePage;


//min 1:02:52 - criação dos links para as pag sobre internas 