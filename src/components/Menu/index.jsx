import "./style.css"
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/" className="menu-item">Início</Link>
                </li>

                <li>
                    <Link to="/muraldeinspiracoes" className="menu-item">Mural de Inspirações </Link>
                </li>

                <li className="dropdown">
                    <Link to="/sobre" className="menu-item">Sobre</Link>

                    <ul className="dropdown-menu" >
                        <li> <Link to="/sobre" className="menu-item">Sobre o Projeto</Link></li>
                        <li> <Link to="/sobre/pretalab" className="menu-item">Sobre Pretalab</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link className="menu-item">Projetos</Link>
                    <ul className="dropdown-menu" >
                    <li><Link to="/consultacep" className="menu-item">Consultar CEP </Link></li>
                        <li> <Link to="/contador" className="menu-item">Contador</Link></li>
                        <li><Link to="/pokemons" className="menu-item">Mural de Pokemon</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )

}


export default Menu;