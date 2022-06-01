/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import Contenido_Buscar_Estudiante_admin from "../../componentes/Componentes_admin/Contenido_Buscar_Estudiante_admin";

export default class Buscar_Estudiante_admin extends React.Component {
  render() {
    return (
      <>
        <NavegacionAdmin />
        <Contenido_Buscar_Estudiante_admin />
      </>
    )
  }
}
