import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoBeneficioAdmin from "../../componentes/Componentes_admin/ContenidoBeneficioAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const BeneficioAdmin = () =>(
  <>
    <ValidateRolAdmin />
    <NavegacionAdmin />
    <ContenidoBeneficioAdmin />
  </>
);

export default BeneficioAdmin;
