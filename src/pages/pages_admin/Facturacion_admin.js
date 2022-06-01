/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import Contenido_Facturacion_admin from "../../componentes/Componentes_admin/Contenido_Facturacion_admin";

export default class Facturacion_admin extends React.Component {
  render() {
    return (
      <>
        <NavegacionAdmin />
        <Contenido_Facturacion_admin />
      </>
    )
  }
}
