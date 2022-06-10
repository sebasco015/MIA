import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import ContenidoGenerarReportesAdmin from "../../componentes/Componentes_admin/ContenidoGenerarReportesAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const GenerarReportesAdmin = () => (

      <>
        <ValidateRolAdmin/>
        <NavegacionAdmin />
        <ContenidoGenerarReportesAdmin />
      </>
    )
export default GenerarReportesAdmin;
