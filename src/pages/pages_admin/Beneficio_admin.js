/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import Contenido_Beneficio_admin from "../../componentes/Componentes_admin/Contenido_Beneficio_admin";

export default class Beneficio_admin extends React.Component {
  render() {
    return (
      <>
        <NavegacionAdmin />
        <Contenido_Beneficio_admin />
      </>
    )
  }
}
