import React from "react";
import NavegacionAdmin from "../../componentes/Componentes_admin/NavegacionAdmin";
import ContenidoCrearContratistaAdmin from "../../componentes/Componentes_admin/ContenidoCrearContratistaAdmin";
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";

const CrearContratistaAdmin = () => (
    <>
        <ValidateRolAdmin />
        <NavegacionAdmin />
        <ContenidoCrearContratistaAdmin />
    </>
);

export default CrearContratistaAdmin;