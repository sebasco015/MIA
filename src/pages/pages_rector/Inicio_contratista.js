/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_rector from '../../componentes/Componentes_rector/Navegacion_rector'
import Contenido_Inicio from '../../componentes/Contenido_Inicio';

export default class Inicio_contratista extends React.Component {
  render() {
    return (
      <>
        <Navegacion_rector />
        <Contenido_Inicio />
      </>
    )
  }
}
