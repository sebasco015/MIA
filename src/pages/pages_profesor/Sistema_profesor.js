/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_profesor from '../../componentes/Componentes_profesor/Navegacion_profesor'
import Contenido_Sistema from "../../componentes/Contenido_Sistema";

export default class Sistema_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_profesor />
        <Contenido_Sistema />
      </>
    )
  }
}
