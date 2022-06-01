/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import Contenido_Instituciones_admin from "../../componentes/Componentes_admin/Contenido_Instituciones_admin";

export default class Instituciones_admin extends React.Component {
  render() {
    return (
      <>
        <NavegacionAdmin />
        <Contenido_Instituciones_admin />
      </>
    )
  }
}
