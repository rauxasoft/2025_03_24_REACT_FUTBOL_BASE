import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Partido } from "../../model/partido";
import { BASE_URL } from "../../helper/constantesGlobales";
import axios from "axios";
import { format } from "date-fns";
import { Button, Table } from "react-bootstrap";

function PartidoAlMinuto(){

    const { id } = useParams();

    const [partido, setPartido] = useState<Partido | null>(null);
    const [error, setError] = useState<unknown>(null);
    const [soloGoles, setSoloGoles] = useState(false);

    const INTERVALO = 3000;

    useEffect(() => {

        const fetchDatos = async () => {
            
            try{
                const httpResponse = await axios.get<Partido>(`${BASE_URL}/partidos/${id}`)
                setPartido(httpResponse.data)
                
                if(httpResponse.data.estado === 'FINALIZADO'){
                    clearInterval(intervalId);
                }

            } catch(error){
                setError(error);
            } 
        }
        
        fetchDatos(); // llamada inicial inmediata
        
        const intervalId = setInterval(fetchDatos, INTERVALO); // polling con setInterval

        return () => clearInterval(intervalId); // Cuando salimos del componente se invoca el return

    }, [id]);

    function getFecha(){
        return partido?.fecha ? format(partido.fecha, 'dd/MM/yyyy') : '';
    }

    function getHora(){
        return partido?.fecha ? format(partido.fecha, 'HH:mm') : '';
    }

    if(error){
        return <h1>Error: {(error as Error)?.message ?? 'desconocido'}</h1>
    }

    function mostrarSoloGoles(){
        setSoloGoles(soloGoles => !soloGoles);
    }

    const lancesFiltrados = soloGoles ? partido?.lances.filter(lance => lance.tipoLance.nombre.includes('GOL')) : partido?.lances
    
    return (
       
        <div className="container mt-4">

            <h1>{partido?.local.nombre} {partido?.golesLocal} - {partido?.visitante.nombre} {partido?.golesVisitante}</h1>
            <h4>Jornada {partido?.numeroJornada} {getFecha()} {getHora()} {partido?.estado}</h4>  
            <Button onClick={mostrarSoloGoles} variant="primary">{soloGoles ? "Ver todo": "Solo goles"}</Button>
        
            <div style={{marginTop: 8}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">Minuto</th>
                            <th scope="col">Tipo de Lance</th>
                            <th scope="col">Comentario</th>
                        </tr>
                    </thead>
                    <tbody>
                    {lancesFiltrados?.slice().reverse().map((lance, i) => ( 
                        <tr key={i}>
                            <td>{lance.minuto}</td>
                            <td>{lance.tipoLance.nombre}</td>
                            <td>{lance.comentario}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
            
        </div>
    )
}

export default PartidoAlMinuto;