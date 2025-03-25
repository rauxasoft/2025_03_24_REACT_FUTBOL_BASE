type EquipoProps = {
    nombre: string;
    escudoUrl: string;
    fechaFundacion: string;
    ciudad: string;
    descripcion: string;
};

function FichaEquipo({nombre, fechaFundacion, ciudad, descripcion}: EquipoProps){

    return (
        <>
            <div className="card text-center mx-auto" style={{ width: "18rem" }}>

            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
            </div>
            <p className="card-text mb-1">
                <strong>Ciudad: </strong> {ciudad}
            </p>
            <p className="card-text mb-1">
                <strong>Fundado en: </strong> {fechaFundacion}
            </p>
            <p className="card-text mb-1">
                <strong>Fundado en: </strong> {fechaFundacion}
            </p>
            <p className="card-text m7-3">{descripcion}</p>
            </div>
        </>
    )
}

export default FichaEquipo