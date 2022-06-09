import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoCambiarClave from "../../componentes/ContenidoCambiarClave";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const CambiarClaveAdmin = () => (
    <>
      <ValidateRolAdmin />
      <NavegacionAdmin />
      <ContenidoCambiarClave />
    </>
);

export default CambiarClaveAdmin;
