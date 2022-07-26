/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionRector from '../../componentes/Componentes_rector/NavegacionRector'
import ValidateRolRector from "../../componentes/Componentes_rector/ValidateRolRector";
import ContenidoFacturacionRector from "../../componentes/Componentes_rector/ContenidoFacturacionRector";

 const FacturacionRector = () => (
      <>
        <ValidateRolRector />
        <NavegacionRector />
        <ContenidoFacturacionRector />
      </>
    )
export default FacturacionRector;
