/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_rector from '../../componentes/Componentes_rector/Navegacion_rector'
import ContenidoInicio from '../../componentes/ContenidoInicio';

export default class Inicio_contratista extends React.Component {
  render() {
    return (
      <>
        <Navegacion_rector />
        <ContenidoInicio />
      </>
    )
  }
}
