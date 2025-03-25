type PartidoProps = {
    idJornada: number;
    idPartido: number;
    fechaPatido: string;
    horaPartido: string;
    equipoLocal: string;
    equipoVisitante: string;
    linkEquipoLocal: string;
    linkEquipoVisitante: string;
    estado: string;
}

function FichaPartido(partidoProps: PartidoProps){

    return (
        <div className={`card text-center mx-auto ${partidoProps.estado === 'FINALIZADO' ? 'fichaPartidoFinalizado finalizado' : ''}`} 
             style={{ width: "22rem"}}>
        
        <div>
            <h4 className="card-title">{partidoProps.equipoLocal} - {partidoProps.equipoVisitante}</h4>
        </div>
        
        <div className="d-flex justify-content-center align-items-center gap-3">
            <img src={partidoProps.linkEquipoLocal}
                className="card-img-top p-3"
                alt="link escudo equipo local"
                style={{height: "140px", objectFit:"contain"}}
            />
            <img src={partidoProps.linkEquipoVisitante}
                className="card-img-top p-3"
                alt="link escudo equipo visitante"
                style={{height: "140px", objectFit:"contain"}}
            />
        </div>

        <div className="card-body">
           
            <p className="card-text mb-1">
                <strong>Fecha: {partidoProps.fechaPatido}</strong>
            </p>
            <p className="card-text mb-1">
                <strong>Hora: {partidoProps.horaPartido}</strong>
            </p>
        </div>
        
    </div>
    
    )
    
}

export default FichaPartido