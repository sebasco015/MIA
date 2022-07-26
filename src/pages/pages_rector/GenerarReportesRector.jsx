/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionRector from '../../componentes/Componentes_rector/NavegacionRector'
import ValidateRolRector from "../../componentes/Componentes_rector/ValidateRolRector";
import ContenidoGenerarReportesRector from "../../componentes/Componentes_rector/ContenidoGenerarReportesRector";

 const GenerarReportesRector = () => (
      <>
        <ValidateRolRector />
        <NavegacionRector />
        <ContenidoGenerarReportesRector />
      </>
    )

export default GenerarReportesRector;
