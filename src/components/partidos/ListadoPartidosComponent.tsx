import { useEffect, useState } from "react";
import { Partido } from "../../model/partido";
import partidoServices from "../../services/partidoServices";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListadoPartidos(){

    const [partidos, setPartidos] = useState<Partido[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
  
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {

        setLoading(true);                               

        partidoServices.getAll()
            .then(response => {
                setPartidos(response.data);      
            }).catch((error) => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            });

    }

    if(loading){
        return (<p>Cargando datos...</p>)
    }

    if(error){
        return (<p>ERROR!</p>)
    }

    return (
        <div className="container mt-4">
        <h2>Listado de Partidos</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Equipo Local</th>
                    <th scope="col">Goles Local</th>
                    <th scope="col">Equipo Visitante</th>
                    <th scope="col">Goles Visitante</th>
                    <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
            {partidos?.map((partido) => (
                <tr key={partido.id}>
                    <td><Link to={`/ficha-partido-minuto/${partido.id}`}>{partido.id}</Link></td>
                    <td>{partido.local.nombre}</td>
                    <td>{partido.golesLocal}</td>
                    <td>{partido.visitante.nombre}</td>
                    <td>{partido.golesVisitante}</td>
                    <td>{partido.estado}</td>
                </tr>
            ))}    
            </tbody>
        </Table>
        </div>
    )
}

export default ListadoPartidos