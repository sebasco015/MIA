/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ValidateRolContratista from "../../componentes/Componentes_contratista/ValidateRolContratista";
import NavegacionContratista from '../../componentes/Componentes_contratista/NavegacionContratista'
import ContenidoBuscarEstudianteContratista from "../../componentes/Componentes_contratista/ContenidoBuscarEstudianteContratista";

  const BuscarEstudianteContratista = () =>  (
  
      <>
        <ValidateRolContratista />
        <NavegacionContratista />
        <ContenidoBuscarEstudianteContratista />
      </>
  )

  export default BuscarEstudianteContratista;
