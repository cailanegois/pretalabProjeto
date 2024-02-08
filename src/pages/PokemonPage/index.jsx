import axios from 'axios';
import ErroPage from "../ErroPage";
import { useEffect, useState } from "react";
import "./style.css";
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack'

const PokemonsPage = () => {

    //uso do useSate para inserir informação em um estado
    const [ReferenciasPokemons, setReferenciasPokemon] = useState([])
    const [listaPokemons, setListaPokemon] = useState([])

    //aparecer o loading
    const [carregando, setCarregando] = useState(true)

    //funcao para buscar os itens da api 
    const pegar50Pokemons = async () => {
        try {

            const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
            setReferenciasPokemon(resposta.data.results);
        } //rastreando um erro 
        catch (error) {
            <ErroPage />
            console.error("Erro ao buscar os pokemons", error)
        }



    };


    //para chamar o resultado da função
    const pegarListaPokemons = async () => {
        let listaTemporaria = [];

        for (const referencia of ReferenciasPokemons) {
            try {
                setCarregando(false)
                const resposta = await axios.get(referencia.url);
                listaTemporaria.push(resposta.data)
            } catch (error) {
                console.log("erro ao buscar o pokemon", error)
            }
        }

        setListaPokemon(listaTemporaria);

    }


    //para chamar o resultado da função
    useEffect(() => {
        pegar50Pokemons()
    }, []);

    useEffect(() => {
        pegarListaPokemons()
    }, [ReferenciasPokemons]);

    return (

        <div className="pokemon-card">
            {listaPokemons.map((pokemon, index) => (
                <a
                    key={pokemon.id}
                    className="pokemon-item"
                    href={pokemon.forms[0].url}
                >
                    <img src={pokemon.sprites.front_default} />
                    <p key={index}>{pokemon.name}</p>
                </a>
            ))}
            <div className='section-carregando'>
                {!carregando && <CircularProgress  />}
            </div>

        </div>

    )
}

export default PokemonsPage;

//apagou o card de pokemons