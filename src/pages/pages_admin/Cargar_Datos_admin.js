/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_admin from '../../componentes/Componentes_admin/Navegacion_admin'
import Contenido_Cargar_Datos_admin from "../../componentes/Componentes_admin/Contenido_Cargar_Datos_admin";

export default class Cargar_Datos_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_admin />
        <Contenido_Cargar_Datos_admin />
      </>
    )
  }
}
