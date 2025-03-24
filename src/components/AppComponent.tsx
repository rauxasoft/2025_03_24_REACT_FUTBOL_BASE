import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./HomeComponent";
import ListadoEquipos from "./ListadoEquipoComponent";
import ListadoPartidos from "./ListadopartidosComponent";
import ListadoArbitros from "./ListadoArbitrosComponent";

function App() {
    return (
       
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/partidos">Listado de Partidos</Link></li>
                    <li><Link to="/equipos">Listado de Equipos</Link></li>
                    <li><Link to="/arbitros">Listado de Árbitros</Link></li>
                </ul>
            </nav>
            <hr/>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/partidos" element={<ListadoPartidos />}/>
                <Route path="/equipos" element={<ListadoEquipos />}/>
                <Route path="/arbitros" element={<ListadoArbitros />}/>
                
            </Routes>

        </BrowserRouter>
    );
}

export default App