/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_contratista from '../../componentes/Componentes_contratista/Navegacion_contratista'
import Contenido_Sistema from "../../componentes/Contenido_Sistema";

export default class Sistema_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_contratista />
        <Contenido_Sistema />
      </>
    )
  }
}
