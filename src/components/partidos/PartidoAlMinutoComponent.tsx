import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Partido } from "../../model/partido";
import { BASE_URL } from "../../helper/constantesGlobales";
import axios from "axios";
import { format } from "date-fns";
import { Spinner, Table } from "react-bootstrap";

function PartidoAlMinuto(){

    const { id } = useParams();

    const [partido, setPartido] = useState<Partido | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);
    const [soloGoles, setSoloGoles] = useState(false);

    const INTERVALO = 3000;

    useEffect(() => {

        const fetchDatos = async () => {
            
            setLoading(true);
            
            try{
                const httpResponse = await axios.get<Partido>(`${BASE_URL}/partidos/${id}`)
                setPartido(httpResponse.data)
                
                if(httpResponse.data.estado === 'FINALIZADO'){
                    clearInterval(intervalId);
                }

            } catch(error){
                setError(error);
            } finally {
                setLoading(false);
            }

        }
        
        fetchDatos(); // llamada inicial inmediata
        
        const intervalId = setInterval(fetchDatos, INTERVALO); // polling con setInterval

        return () => clearInterval(intervalId); // Cuando salimos del componente se invoca el return

    }, []);

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
        <>
        <h1>{partido?.local.nombre} {partido?.golesLocal} - {partido?.visitante.nombre} {partido?.golesVisitante}</h1>
        <h4>Jornada {partido?.numeroJornada} {getFecha()} {getHora()} {partido?.estado}</h4>
        <p>Mostar solo goles: {soloGoles ? "SI": "NO"}</p> 
        <button onClick={mostrarSoloGoles}>Mostar SOLO goles</button>       
        <hr/>

        {loading &&
            <div className="d-flex justify-content-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                </Spinner>
            </div>
        }

        {!loading &&
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Minuto</th>
                        <th scope="col">Tipo de Lance</th>
                        <th scope="col">Comentario</th>
                    </tr>
                </thead>
                <tbody>
               {/* {partido?.lances.slice().reverse().    map((lance, i) => ( */}
                 {lancesFiltrados?.slice().reverse().map((lance, i) => ( 
                    <tr key={i}>
                        <td>{lance.minuto}</td>
                        <td>{lance.tipoLance.nombre}</td>
                        <td>{lance.comentario}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        }
        </>
    )
}

export default PartidoAlMinuto;