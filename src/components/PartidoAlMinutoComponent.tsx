import { useParams } from "react-router-dom";

function PartidoAlMinuto(){

    const { id } = useParams();

    return (
        <>
            <h2>Bienvenidos a Partido {id} al Minuto</h2>
        
        
        </>
    )
}

export default PartidoAlMinuto;