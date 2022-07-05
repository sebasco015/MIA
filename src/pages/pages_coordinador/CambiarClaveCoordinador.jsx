/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionCoordinador from '../../componentes/Componentes_coordinador/NavegacionCoordinador'
import ValidateRolCoordinador from "../../componentes/Componentes_coordinador/ValidateRolCoordinador";
import ContenidoCambiarClave from "../../componentes/ContenidoCambiarClave";

 const CambiarClaveCoordinador = () => (
      <>
        <ValidateRolCoordinador />
        <NavegacionCoordinador />
        <ContenidoCambiarClave />
      </>
    )

    export default CambiarClaveCoordinador; 
