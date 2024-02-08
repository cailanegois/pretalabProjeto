import Rodape from "./components/Rodape";
import { Route, Routes } from "react-router-dom"
import ContadorPage from "./pages/ContadorPage";
import MuralInspiracoes from "./pages/MuralInspiracoesPage";
import SobrePage from "./pages/SobrePage";
import SobreMimPage
  from "./pages/SobrePage/SobreMimPage";
import SobrePretalabPage from "./pages/SobrePage/SobrePretalabPage";
import PokemonsPage from "./pages/PokemonPage";
import ErroPage from "./pages/ErroPage";
import EnderecoPage from "./pages/EnderecoPage";
import Menu from "./components/Menu";



function App() {

  return (
    <>
      <Menu />

      <div style={{ marginBottom: "130px" }}>
        <Routes>
          <Route path="/" element={<SobreMimPage />} />
          <Route path="/contador" element={<ContadorPage />} />

          <Route path="*" element={<ErroPage />} />

          <Route path="muraldeinspiracoes" element={<MuralInspiracoes />} />

          <Route path="/sobre">
            <Route index element={<SobrePage />} />
            <Route path="pretalab" element={<SobrePretalabPage />} />
          </Route>

          <Route path="/pokemons" element={<PokemonsPage />} />

          <Route path="/consultacep" element={<EnderecoPage />} />
        </Routes>
      </div>
      
      <Rodape />

     </>
  );
}

export default App;