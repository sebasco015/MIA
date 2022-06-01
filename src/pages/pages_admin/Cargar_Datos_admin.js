/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import Contenido_Cargar_Datos_admin from "../../componentes/Componentes_admin/Contenido_Cargar_Datos_admin";

export default class Cargar_Datos_admin extends React.Component {
  render() {
    return (
      <>
        <NavegacionAdmin />
        <Contenido_Cargar_Datos_admin />
      </>
    )
  }
}
