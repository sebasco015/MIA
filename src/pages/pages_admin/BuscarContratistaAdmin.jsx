import React from 'react';
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin';
import ValidateRolAdmin from "../../componentes/Componentes_admin/ValidateRolAdmin";
import ContenidoBuscarContratistaAdmin from "../../componentes/Componentes_admin/ContenidoBuscarContratistaAdmin";


const BucarContratistaAdmin = () => ( 
    <>
        <ValidateRolAdmin />
        <NavegacionAdmin />
        <ContenidoBuscarContratistaAdmin /> 

    </>
);

export default BucarContratistaAdmin;