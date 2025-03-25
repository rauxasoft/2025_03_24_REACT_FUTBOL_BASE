import { useEffect, useState } from "react";
import { Arbitro } from "../../model/arbitro";
import arbitroServices from "../../services/arbitroServices";
import { Table } from "react-bootstrap";
import { differenceInYears } from "date-fns";

function ListadoArbitros(){
    
    const [arbitros, setArbitros] = useState<Arbitro[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
  
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {

        setLoading(true);                               

        arbitroServices.getAll()
            .then(response => {
                setArbitros(response.data);      
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
        <h2>Listado de Árbitros</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre Completo</th>
                    <th scope="col">Colegio</th>
                    <th scope="col">Edad</th>
                </tr>
            </thead>
            <tbody>
            {arbitros?.map((arbitro) => (
                <tr key={arbitro.id}>
                    <td>{arbitro.id}</td>
                    <td>{arbitro.apellido1} {arbitro.apellido2}, {arbitro.nombre} </td>
                    <td>{arbitro.colegio}</td>
                    <td>{differenceInYears(new Date(), arbitro.fechaNacimiento)}</td>
                </tr>
            ))}    
            </tbody>
        </Table>
        </>
    )
}

export default ListadoArbitros   