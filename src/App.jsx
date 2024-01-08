
import Formulario from "./components/Formulario";
import ListaEstudantes from "./components/ListaDeEstudantes";
import Rodape from "./components/Rodape";
import Header from "./components/header"

function App() {
   /*chamando um compenente/td que quer q apareça na tela */
   return (

      <>
         <Header />;
         <Formulario />;
         <ListaEstudantes />
         <Rodape />
      </>

   )

}

export default App; 
