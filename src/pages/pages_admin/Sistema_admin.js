/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_admin from '../../componentes/Componentes_admin/Navegacion_admin'
import Contenido_Sistema from "../../componentes/Contenido_Sistema";

export default class Sistema_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_admin />
        <Contenido_Sistema />
      </>
    )
  }
}
