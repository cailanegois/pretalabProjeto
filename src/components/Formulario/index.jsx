import CaixaDeTexto from "../CaixaDeTexto";
import Botao from "../Botao"
import "./style.css"


const Formulario = () => {
    // const listaCargos = ['Back-end', 'Front-end', 'Ux/UI design', 'Gestão', 'Fullstack']

    return (

        <section className="formulario">

            <form>
                <b>Preencha com os dados da mulher referência para criar um card </b>

                <CaixaDeTexto label="Nome:" placeholder="Digite o nome" />

                <CaixaDeTexto label="Foto:" placeholder="Digite o endereço da sua imagem" />
                <CaixaDeTexto label="Comida que não gosta:" placeholder="Digite uma comida que não gosta" />                <CaixaDeTexto label="Experiencia massa: " placeholder="Digite uma experiência positiva" />

                <Botao label="Inserir" onClick="{onClick}"/>
                <Botao label="Limpar dados" onClick="{onClick}"/>
            </form>

        </section>
    )
}

export default Formulario; 