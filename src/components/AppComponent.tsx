import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./HomeComponent";
import ListadoEquipos from "./ListadoEquipoComponent";
import ListadoArbitros from "./ListadoArbitrosComponent";
import ListadoPartidos from "./ListadoPartidosComponent";
import PartidoAlMinuto from "./PartidoAlMinutoComponent";
import AltaArbitro from "./AltaArbitroComponent";

function App() {

    return (
       
        <BrowserRouter>
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/partidos">Listado de Partidos</Link></li>
                        <li><Link to="/equipos">Listado de Equipos</Link></li>
                        <li><Link to="/arbitros">Listado de Árbitros</Link></li>
                        <li><Link to="/alta-arbitro">Alta de Árbitro</Link></li>
                    </ul>
                </nav>
                <hr/>

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/partidos" element={<ListadoPartidos />}/>
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