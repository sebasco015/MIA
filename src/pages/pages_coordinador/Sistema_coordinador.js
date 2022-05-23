/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_coordinador from '../../componentes/Componentes_coordinador/Navegacion_coordinador'
import Contenido_Sistema from "../../componentes/Contenido_Sistema";

export default class Sistema_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_coordinador />
        <Contenido_Sistema />
      </>
    )
  }
}
