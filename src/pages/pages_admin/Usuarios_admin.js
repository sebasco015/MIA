/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_admin from '../../componentes/Componentes_admin/Navegacion_admin'
import Contenido_Usuarios_admin from "../../componentes/Componentes_admin/Contenido_Usuarios_admin";

class Usuarios extends React.Component {
  render() {
    return (
      <>
        <Navegacion_admin />
        <Contenido_Usuarios_admin />
      </>
    )
  }
}
export default Usuarios;