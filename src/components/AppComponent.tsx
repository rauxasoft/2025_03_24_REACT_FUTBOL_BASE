import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./HomeComponent";
import ListadoEquipos from "./ListadoEquipoComponent";
import ListadoArbitros from "./ListadoArbitrosComponent";
import ListadoPartidos from "./ListadoPartidosComponent";
import AlbumFichas from "./AlbumEquiposComponent";

function App() {

    if(Math.random() > 0){
        
    return(
        <>
            <AlbumFichas/>
        </>
    )
}

    return (
       
        <BrowserRouter>
            <div className="container">
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
            </div>
        </BrowserRouter>
    );
}

export default App