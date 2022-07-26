/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionRector from '../../componentes/Componentes_rector/NavegacionRector'
import ValidateRolRector from "../../componentes/Componentes_rector/ValidateRolRector";
import ContenidoSistema from "../../componentes/ContenidoSistema";

const SistemaRector = () => (
      <>
        <ValidateRolRector />
        <NavegacionRector />
        <ContenidoSistema />
      </>
    )

export default SistemaRector;
