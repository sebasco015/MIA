/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import Contenido_Usuarios_admin from "../../componentes/Componentes_admin/Contenido_Usuarios_admin";

class Usuarios extends React.Component {
  render() {
    return (
      <>
        <NavegacionAdmin />
        <Contenido_Usuarios_admin />
      </>
    )
  }
}
export default Usuarios;