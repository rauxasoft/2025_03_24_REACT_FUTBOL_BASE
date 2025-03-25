type PartidoProps = {
    idJornada: number;
    idPartido: number;
    fechaPatido: string;
    horaPartido: string;
    equipoLocal: string;
    equipoVisitante: string;
    linkEquipoLocal: string;
    linkEquipoVisitante: string;
}

function FichaPartido(partidoProps: PartidoProps){

    return (
        
        <div className="card text-center mx-auto" style={{ width: "26rem" }}>
        
        <div>
            <h3 className="card-title">{partidoProps.equipoLocal} - {partidoProps.equipoVisitante}</h3>
        </div>
        
        <img src={partidoProps.linkEquipoLocal}
             className="card-img-top p-3"
             alt="link escudo equipo local"
             style={{height: "100px", objectFit:"contain"}}
        />
         <img src={partidoProps.linkEquipoVisitante}
             className="card-img-top p-3"
             alt="link escudo equipo visitante"
             style={{height: "100px", objectFit:"contain"}}
        />

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