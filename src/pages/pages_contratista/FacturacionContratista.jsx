/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ValidateRolContratista from "../../componentes/Componentes_contratista/ValidateRolContratista";
import NavegacionContratista from '../../componentes/Componentes_contratista/NavegacionContratista'
import ContenidoFacturacionContratista from "../../componentes/Componentes_contratista/ContenidoFacturacionContratista";

 const FacturacionContratista = () => (
      <>
        <ValidateRolContratista />
        <NavegacionContratista />
        <ContenidoFacturacionContratista />
      </>
    )
 export default FacturacionContratista;
