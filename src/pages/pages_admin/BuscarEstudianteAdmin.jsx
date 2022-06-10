/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoBuscarEstudianteAdmin from "../../componentes/Componentes_admin/ContenidoBuscarEstudianteAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const BuscarEstudianteAdmin = () => (
      <>
        <ValidateRolAdmin />
        <NavegacionAdmin />
        <ContenidoBuscarEstudianteAdmin />
      </>
    
);

export default BuscarEstudianteAdmin;

