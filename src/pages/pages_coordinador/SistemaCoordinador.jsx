/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionCoordinador from '../../componentes/Componentes_coordinador/NavegacionCoordinador'
import ValidateRolCoordinador from "../../componentes/Componentes_coordinador/ValidateRolCoordinador";
import ContenidoSistema from "../../componentes/ContenidoSistema";

 const SistemaCoordinador = () => (
      <>
        <ValidateRolCoordinador /> 
        <NavegacionCoordinador />
        <ContenidoSistema />
      </>
    )

export default SistemaCoordinador;