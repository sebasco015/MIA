/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoInstitucionesAdmin from "../../componentes/Componentes_admin/ContenidoInstitucionesAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const InstitucionesAdmin = () => (
 
      <>
        <ValidateRolAdmin/>
        <NavegacionAdmin />
        <ContenidoInstitucionesAdmin />
      </>
    )
export default InstitucionesAdmin;
