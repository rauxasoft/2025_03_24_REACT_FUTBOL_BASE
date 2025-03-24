import FichaEquipo from "./FichaEquipoComponent"

function AlbumFichas(){

    return(
        <div className="container mt-5">

            <FichaEquipo nombre="F.C. Badajoz"
                         escudoUrl={""} 
                         fechaFundacion="23/11/1920"
                         ciudad="Badajoz" 
                         descripcion="Club fundado por estudiantes ingleses que hacían prácticas en la ciudad..."/>

        </div>
    )

}

export default AlbumFichas