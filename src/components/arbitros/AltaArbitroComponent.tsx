import { useState } from "react";
import { Arbitro } from "../../model/arbitro";

import { useNavigate } from "react-router";
import arbitroServices from "../../services/arbitroServices";

function AltaArbitro() {

    const [nombre, setNombre] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [colegio, setColegio] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault(); // Esto evita el comportamiento por defecto del formulario que normalmente recargaría la pagina al hacer submit

        const newArbitro: Arbitro = {
            id: null,
            nombre,
            apellido1, 
            apellido2, 
            colegio,
            fechaNacimiento: fechaNacimiento ? new Date(fechaNacimiento) : null
        }

        try{
            await arbitroServices.create(newArbitro);
            navigate('/arbitros'); // navegación programática
        } catch(err){
            console.log(err);
            setError('Error al intentar crear el arebitro');
        }

    }

    return (
        <div className="container mt-4">
            <h2>Nuevo Árbitro</h2>

            {error && (
                <div className="alert alert-danger" role="alert">{error}</div>
            )}

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Primer Apellido:</label>
                    <input type="text" className="form-control" value={apellido1} onChange={(e) => setApellido1(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Segundo Apellido:</label>
                    <input type="text" className="form-control" value={apellido2} onChange={(e) => setApellido2(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Colegio:</label>
                    <input type="text" className="form-control" value={colegio} onChange={(e) => setColegio(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Fecha de Nacimiento:</label>
                    <input type="date" className="form-control" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required/>
                </div>

                <button type="submit" className="btn btn-primary">Crear</button>

            </form>
    
        </div>
    )
}

export default AltaArbitro