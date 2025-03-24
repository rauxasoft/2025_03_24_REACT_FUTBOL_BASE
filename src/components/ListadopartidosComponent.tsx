import { useEffect, useState } from "react";
import { Partido } from "../model/partido";
import partidoServices from "../services/partidoServices";
import { Table } from "react-bootstrap";

function ListadoPartidos(){

    const [partidos, setPartidos] = useState<Partido[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    // 1.- Inicializar el componente (usar el servicio para traernos los datos)

    useEffect(() => {
        fetchData();
    }, []);

    // 2.- Definir una función que haga uso del servicio y se traiga los datos

    const fetchData = () => {

        setLoading(() => true);                               

        partidoServices.getAll()
            .then(response => {
                setPartidos(() => response.data);      
            }).catch(() => {
                setError("Error al traer datos");
            }).finally(() => {
                setLoading(() => false);
            });

    }

    // 3.- Devolver el HTML correspondiente a la fase de carga (loading)

    if(loading){
        return (<p>Cargando datos...</p>)
    }

    // 4.- Devolver el HTML correspondiente a una situación de error

    if(error){
        return (<p>ERROR!</p>)
    }

    // 5.- Devolver el HTML correspondiente a la tabla partidos

    return (
        <>
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
            {partidos?.map((partido) => (
                <tr key={partido.id}>
                    <td>{partido.id}</td>
                    <td>{partido.local.nombre}</td>
                    <td>{partido.golesLocal}</td>
                    <td>{partido.visitante.nombre}</td>
                    <td>{partido.golesVisitante}</td>
                    <td>{partido.estado}</td>
                </tr>
            ))}    
            <tbody>

            </tbody>
        </Table>
        </>
    )
}

export default ListadoPartidos