/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_contratista from '../../componentes/Componentes_contratista/Navegacion_contratista'
import Contenido_Inicio from '../../componentes/Contenido_Inicio';

export default class Inicio_contratista extends React.Component {
  render() {
    return (
      <>
        <Navegacion_contratista />
        <Contenido_Inicio />
      </>
    )
  }
}
