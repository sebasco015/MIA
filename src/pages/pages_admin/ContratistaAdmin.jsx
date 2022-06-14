import React from "react";
import NavegacionAdmin from "../../componentes/Componentes_admin/NavegacionAdmin";
import ContenidoContratistaAdmin from "../../componentes/Componentes_admin/ContenidoContratistaAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const ContratistaAdmin = () => (
    <>
        <ValidateRolAdmin />
        <NavegacionAdmin />
        <ContenidoContratistaAdmin />
    </>
);

export default ContratistaAdmin;