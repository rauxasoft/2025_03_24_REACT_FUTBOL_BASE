import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./home/HomeComponent";
import ListadoEquipos from "./equipos/ListadoEquipoComponent";
import ListadoArbitros from "./arbitros/ListadoArbitrosComponent";
import ListadoPartidos from "./partidos/ListadoPartidosComponent";
import PartidoAlMinuto from "./partidos/PartidoAlMinutoComponent";
import AltaArbitro from "./arbitros/AltaArbitroComponent";
import ListadoFichasPartidos from "./partidos/ListadoFichasPartidosComponent";

function App() {

    return (
       
        <BrowserRouter>
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/partidos">Partidos</Link></li>
                        <li><Link to="/fichas-partidos">Fichas de Partidos</Link></li>
                        <li><Link to="/equipos">Equipos</Link></li>
                        <li><Link to="/arbitros">Árbitros</Link></li>
                        <li><Link to="/alta-arbitro">Alta de Árbitro</Link></li>
                    </ul>
                </nav>
                <hr/>

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/partidos" element={<ListadoPartidos />}/>
                    <Route path="/fichas-partidos" element={<ListadoFichasPartidos />}/>
                    <Route path="/ficha-partido-minuto/:id" element={<PartidoAlMinuto />}/>
                    <Route path="/equipos" element={<ListadoEquipos />}/>
                    <Route path="/arbitros" element={<ListadoArbitros />}/>  
                    <Route path="/alta-arbitro" element={<AltaArbitro />}/>  
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App