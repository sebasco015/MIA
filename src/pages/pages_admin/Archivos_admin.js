/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_admin from '../../componentes/Componentes_admin/Navegacion_admin'
import Contenido_Archivos_admin from "../../componentes/Componentes_admin/Contenido_Archivos_admin";

export default class Archivos_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_admin />
        <Contenido_Archivos_admin />
      </>
    )
  }
}
