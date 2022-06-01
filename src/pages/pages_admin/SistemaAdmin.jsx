import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoSistema from "../../componentes/ContenidoSistema";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const SistemaAdmin = () => {
  return (
    <>
      <ValidateRolAdmin />
      <NavegacionAdmin />
      <ContenidoSistema />
    </>
  );
}

export default SistemaAdmin;
