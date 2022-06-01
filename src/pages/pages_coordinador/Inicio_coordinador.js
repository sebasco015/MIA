/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_coordinador from '../../componentes/Componentes_coordinador/Navegacion_coordinador'
import ContenidoInicio from '../../componentes/ContenidoInicio';

export default class Inicio_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_coordinador />
        <ContenidoInicio />
      </>
    )
  }
}
