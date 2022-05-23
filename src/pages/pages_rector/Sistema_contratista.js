/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_rector from '../../componentes/Componentes_rector/Navegacion_rector'
import Contenido_Sistema from "../../componentes/Contenido_Sistema";

export default class Sistema_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_rector />
        <Contenido_Sistema />
      </>
    )
  }
}
