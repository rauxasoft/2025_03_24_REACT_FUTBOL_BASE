import { useEffect, useState } from "react";
import { Partido } from "../../model/partido";
import partidoServices from "../../services/partidoServices";
import FichaPartido from "./FichaPartido";
import { format } from "date-fns";

function ListadoFichasPartidos(){

    const [partidos, setPartidos] = useState<Partido[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
  
    const estiloFicha = {
        margin: '10px',
    }

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
        {partidos?.map(partido => (
            <div style={estiloFicha}>
                <FichaPartido key={partido.id}
                    equipoLocal={partido.local.nombre}
                    equipoVisitante={partido.visitante.nombre}
                    fechaPatido={format(partido.fecha, "dd/MM/yyyy")}
                    horaPartido={format(partido.fecha, "HH:mm")}
                    linkEquipoLocal={partido.local.linkEscudo}
                    linkEquipoVisitante={partido.visitante.linkEscudo}
                    idJornada={partido.numeroJornada}
                    idPartido={partido.id}
                    estado={partido.estado}
                />
            </div>
        ))

        }
        </div>
    )
}

export default ListadoFichasPartidos