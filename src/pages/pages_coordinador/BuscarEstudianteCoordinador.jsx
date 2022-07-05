
import React from "react";
import NavegacionCoordinador from '../../componentes/Componentes_coordinador/NavegacionCoordinador'
import ContenidoBuscarEstudianteCoordinador from "../../componentes/Componentes_coordinador/ContenidoBuscarEstudianteCoordinador";
import ValidateRolCoordinador from "../../componentes/Componentes_coordinador/ValidateRolCoordinador";

 const BuscarEstudianteCoorinador = () => (
      <>
        <ValidateRolCoordinador />
        <NavegacionCoordinador />
        <ContenidoBuscarEstudianteCoordinador />
      </>
    )

export default BuscarEstudianteCoorinador;