import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoUsuariosAdmin from "../../componentes/Componentes_admin/ContenidoUsuariosAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const UsuariosAdmin = () =>(
    <>
      <ValidateRolAdmin />
      <NavegacionAdmin />
      <ContenidoUsuariosAdmin />
    </>
);

export default UsuariosAdmin;
