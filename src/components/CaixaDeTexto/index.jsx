import "./style.css"
//props

const CaixaDeTexto = ({label,placeholder}) => {
   
    return ( 

    <div className="campo-texto">
        <label>{label}</label>
        <input type="text" placeholder={placeholder}/>
    </div>
)
}

export default CaixaDeTexto;