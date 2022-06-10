import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoHuellaEstudianteNuevoAdmin from "../../componentes/Componentes_admin/ContenidoHuellaEstudianteNuevoAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const HuellaEstudianteNuevoAdmin = () => (
    <>
      <ValidateRolAdmin />
      <NavegacionAdmin />
      <ContenidoHuellaEstudianteNuevoAdmin />
    </>
);

export default HuellaEstudianteNuevoAdmin;
