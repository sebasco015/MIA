/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionRector from '../../componentes/Componentes_rector/NavegacionRector';
import ValidateRolRector from "../../componentes/Componentes_rector/ValidateRolRector";
import ContenidoBuscarEstudianteRector from "../../componentes/Componentes_rector/ContenidoBuscarEstudianteRector";

 const BuscarEstudianteRector = () => (
      <>
        <ValidateRolRector /> 
        <NavegacionRector />
        <ContenidoBuscarEstudianteRector />
      </>
    )

export default BuscarEstudianteRector