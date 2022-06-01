/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_profesor from '../../componentes/Componentes_profesor/Navegacion_profesor'
import ContenidoInicio from '../../componentes/ContenidoInicio';

export default class Inicio_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_profesor />
        <ContenidoInicio />
      </>
    )
  }
}
