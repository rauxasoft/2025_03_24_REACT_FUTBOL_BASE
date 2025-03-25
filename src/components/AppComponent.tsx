import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./home/HomeComponent";
import ListadoEquipos from "./equipos/ListadoEquipoComponent";
import ListadoArbitros from "./arbitros/ListadoArbitrosComponent";
import ListadoPartidos from "./partidos/ListadoPartidosComponent";
import PartidoAlMinuto from "./partidos/PartidoAlMinutoComponent";
import AltaArbitro from "./arbitros/AltaArbitroComponent";
import ListadoFichasPartidos from "./partidos/ListadoFichasPartidosComponent";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function App() {

    return (
       
        <BrowserRouter>
            <div className="container">
            <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand as={Link} to="/">Liga REACT</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="me-auto">

            
            <NavDropdown title="Árbitros" id="nav-arbitros">
              <NavDropdown.Item as={Link} to="/arbitros">Listado</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/alta-arbitro">Alta</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Equipos" id="nav-equipos">
              <NavDropdown.Item as={Link} to="/equipos">Listado</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Partidos" id="nav-partidos">
              <NavDropdown.Item as={Link} to="/partidos">Listado</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fichas-partidos">Fichas</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
               

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