import React from 'react';
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin';
import ContenidoActullizarUsuariosAdmin from '../../componentes/Componentes_admin/contenidoActullizarUsuariosAdmin';
import ValidateRolAdmin from '../../componentes/Componentes_admin/ValidateRolAdmin';

const ActualizarUsuarioAdmin = () => (
    <>
    <ValidateRolAdmin />
    <NavegacionAdmin />
    <ContenidoActullizarUsuariosAdmin/>
    </>
)

export default ActualizarUsuarioAdmin;