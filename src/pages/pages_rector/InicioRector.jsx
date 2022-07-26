/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionRector from '../../componentes/Componentes_rector/NavegacionRector';
import ValidateRolRector from "../../componentes/Componentes_rector/ValidateRolRector";
import ContenidoInicio from '../../componentes/ContenidoInicio';

const InicioRector = () =>  (
      <>
        <ValidateRolRector />  
        <NavegacionRector />
        <ContenidoInicio />
      </>
    )


export default InicioRector;
