/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoFacturacionAdmin from "../../componentes/Componentes_admin/ContenidoFacturacionAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const FacturacionAdmin = () => (

      <>
        <ValidateRolAdmin/>
        <NavegacionAdmin />
        <ContenidoFacturacionAdmin />
      </>
    )
export default FacturacionAdmin;