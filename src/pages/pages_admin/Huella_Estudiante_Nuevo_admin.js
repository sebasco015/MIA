/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import Contenido_Huella_Estudiante_Nuevo_admin from "../../componentes/Componentes_admin/Contenido_Huella_Estudiante_Nuevo_admin";

export default class Huella_Estudiante_Nuevo extends React.Component {
  render() {
    return (
      <>
        <NavegacionAdmin />
        <Contenido_Huella_Estudiante_Nuevo_admin />
      </>
    )
  }
}