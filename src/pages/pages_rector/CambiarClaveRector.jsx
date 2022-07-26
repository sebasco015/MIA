/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionRector from '../../componentes/Componentes_rector/NavegacionRector'
import ValidateRolRector from "../../componentes/Componentes_rector/ValidateRolRector";
import ContenidoCambiarClave from "../../componentes/ContenidoCambiarClave";

 const CambiarClaveRector = () => (
      <>
        <ValidateRolRector />
        <NavegacionRector />
        <ContenidoCambiarClave />
      </>
    )

export default CambiarClaveRector;
