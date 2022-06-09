import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoCargarDatosAdmin from "../../componentes/Componentes_admin/ContenidoCargarDatosAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const CargarDatosAdmin = () => (
    <>
      <ValidateRolAdmin />
      <NavegacionAdmin />
      <ContenidoCargarDatosAdmin />
    </>
);

export default CargarDatosAdmin;
