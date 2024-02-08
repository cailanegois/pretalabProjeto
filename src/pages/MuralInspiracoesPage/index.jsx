import { useState, useEffect } from "react";
import Formulario from "../../components/Formulario";
import ListaDeEstudantes from "../../components/ListaDeEstudantes";
import {estudantes} from "../../data/estudantes"
import "./style.css"
import Banner from "../../components/Banner";
import { CircularProgress } from "@mui/material";


const MuralInspiracoes = () =>{
    const listaStorage = localStorage.getItem("estudantes");
    const [lista, setLista] = useState(JSON.parse(listaStorage) || estudantes);
  
    //aparecer o loading
    const [carregando, setCarregando] = useState(true)

    // onCreate
    useEffect(() => {
      if (listaStorage) {
        setLista(JSON.parse(listaStorage));
      }

      setCarregando(false)
              
    }, []);
  
    // onUpdate
    useEffect(() => {
      localStorage.setItem("estudantes", JSON.stringify(lista));

      {!carregando && <CircularProgress  />}
    }, [lista]);

    return (
        <>
        <Banner />
        <Formulario setLista={setLista} lista={lista}/>
        <ListaDeEstudantes lista={lista}/>
    
        </>
    )
  
}




export default MuralInspiracoes; 