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

    <div className="card text-center mx-auto" style={{ width: "18rem" }}>
        <img src={partidoProps.linkEquipoLocal}
             className="card-img-top p-3"
             alt="link escudo equipo local"
             style={{height: "200px", objectFit:"contain"}}
        />
        
    </div>


    return (
        <>
        <h2>Ficha de Partido</h2>
        </>
    )
    
}

export default FichaPartido