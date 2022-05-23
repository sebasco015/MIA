/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_admin from '../../componentes/Componentes_admin/Navegacion_admin'
import Contenido_Huella_Estudiante_Nuevo_admin from "../../componentes/Componentes_admin/Contenido_Huella_Estudiante_Nuevo_admin";

export default class Huella_Estudiante_Nuevo extends React.Component {
  render() {
    return (
      <>
        <Navegacion_admin />
        <Contenido_Huella_Estudiante_Nuevo_admin />
      </>
    )
  }
}