
import Header from "./components/Header";
import Rodape from "./components/Rodape";
import { Route, Routes } from "react-router-dom"
import ContadorPage from "./pages/ContadorPage";
import InicioPage from "./pages/InicioPage";
import SobrePage from "./pages/SobrePage";
import SobreMimPage
  from "./pages/SobrePage/SobreMimPage";
import SobrePretalabPage from "./pages/SobrePage/SobrePretalabPage";
import PokemonsPage from "./pages/PokemonPage";
import ErroPage from "./pages/ErroPage";


function App() {

  return (
    <>
      <Header />

      <div style={{ marginBottom: "130px" }}>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/contador" element={<ContadorPage />} />

          <Route path="*" element={<ErroPage />} />

          <Route path="/sobre">
            <Route index element={<SobrePage />} />
            <Route path="sobremim" element={<SobreMimPage />} />
            <Route path="pretalab" element={<SobrePretalabPage />} />
          </Route>

          <Route path="/pokemons" element={<PokemonsPage />} />


        </Routes>
      </div>
      <Rodape /> </>
  );
}

export default App;