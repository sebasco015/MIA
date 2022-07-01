/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ValidateRolContratista from "../../componentes/Componentes_contratista/ValidateRolContratista";
import NavegacionContratista from '../../componentes/Componentes_contratista/NavegacionContratista'
import ContenidoGenerarReportesContratista from "../../componentes/Componentes_contratista/ContenidoGenerarReportesContratista";

 const GenerarReportesContratista = () => (
      <>
        <ValidateRolContratista />
        <NavegacionContratista />
        <ContenidoGenerarReportesContratista />
      </>
    )
  
    export default GenerarReportesContratista;
