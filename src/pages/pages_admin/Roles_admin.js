/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import Contenido_Roles_admin from "../../componentes/Componentes_admin/Contenido_Roles_admin";

export default class Roles_admin extends React.Component {
  render() {
    return (
      <>
        <NavegacionAdmin />
        <Contenido_Roles_admin />
      </>
    )
  }
}
