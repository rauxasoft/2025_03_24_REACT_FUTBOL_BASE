import { useEffect, useState } from "react";
import { Equipo } from "../model/equipo";
import { Table } from "react-bootstrap";
import equipoServices from "../services/arbitroServices";

function ListadoEquipos(){

    const [equipos, setEquipos] = useState<Equipo[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
  
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {

        setLoading(true);                               

        equipoServices.getAll()
            .then(response => {
                setEquipos(response.data);      
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
        <>
        <h2>Listado de Equipos</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Escudo</th>
                </tr>
            </thead>
            <tbody>
            {equipos?.map((equipo) => (
                <tr key={equipo.id}>
                    <td>{equipo.id}</td>
                    <td>{equipo.nombre}</td>
                    <td>{equipo.ciudad}</td>
                    <td>{equipo.linkEscudo}</td>
                </tr>
            ))}    
            </tbody>
        </Table>
        </>
    )
}

export default ListadoEquipos