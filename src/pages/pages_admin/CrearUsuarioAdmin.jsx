import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoCrearUsuarioAdmin from "../../componentes/Componentes_admin/ContenidoCrearUsuarioAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const CrearUsuarioAdmin = () =>(
  <>
    <ValidateRolAdmin />
    <NavegacionAdmin />
    <ContenidoCrearUsuarioAdmin />
  </>
);

export default CrearUsuarioAdmin;
