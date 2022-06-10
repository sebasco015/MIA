import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoArchivosAdmin from "../../componentes/Componentes_admin/ContenidoArchivosAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const ArchivosAdmin = () => (
  <>
    <ValidateRolAdmin />
    <NavegacionAdmin />
    <ContenidoArchivosAdmin />
  </>
);

export default ArchivosAdmin;
