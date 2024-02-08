
import './style.css'
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Rodape = ({ texto }) => {
    return (
        <>

            <footer >
                <div id="rodape">
                    <div className='menu-footer'>

                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" className="menu-item">Início</Link>
                                </li>

                                <li>
                                    <Link to="/muraldeinspiracoes" className="menu-item">Mural de Inspirações </Link>
                                </li>

                                <li>
                                    <Link to="/sobre" className="menu-item">Sobre</Link>
                                </li>


                                <li> <Link to="/sobre" className="menu-item">Sobre o Projeto</Link></li>
                                <li> <Link to="/sobre/pretalab" className="menu-item">Sobre Pretalab</Link></li>



                                <li><Link to="/consultacep" className="menu-item">Consultar CEP </Link></li>
                                <li> <Link to="/contador" className="menu-item">Contador</Link></li>
                                <li><Link to="/pokemons" className="menu-item">Mural de Pokemon</Link></li>

                            </ul>
                        </nav>

                    </div>

                    <div className='icones'>
                        <h4>Conecte-se</h4>
                        <ul>
                            <li><Link to="https://www.linkedin.com/in/cailanegois/" target='_blank'><FaLinkedin  color='black' size="30px"/> </Link></li>
                            <li><Link to="https://github.com/cailanegois/" target='_blank'> <FaGithub color='black' size="30px"/></Link></li>
    
                        </ul>

                    </div>
                </div>
                <p>{texto = "Desenvolvido por Cailane Gois"}</p>
            </footer>


        </>


    )

}

export default Rodape;