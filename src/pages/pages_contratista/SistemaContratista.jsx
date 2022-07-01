/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ValidateRolContratista from "../../componentes/Componentes_contratista/ValidateRolContratista";
import NavegacionContratista from '../../componentes/Componentes_contratista/NavegacionContratista'
import ContenidoSistema from "../../componentes/ContenidoSistema";

 const SistemaContratista = () => (
      <>
        <ValidateRolContratista />
        <NavegacionContratista />
        <ContenidoSistema />
      </>
    )

    export default SistemaContratista;
