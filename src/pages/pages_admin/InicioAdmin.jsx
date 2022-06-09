import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoInicio from '../../componentes/ContenidoInicio';
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const InicioAdmin = () => (
  <>
    <ValidateRolAdmin />
    <NavegacionAdmin />
    <ContenidoInicio />
  </>
);

export default InicioAdmin;
