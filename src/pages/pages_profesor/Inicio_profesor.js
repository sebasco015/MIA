/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_profesor from '../../componentes/Componentes_profesor/Navegacion_profesor'
import Contenido_Inicio from '../../componentes/Contenido_Inicio';

export default class Inicio_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_profesor />
        <Contenido_Inicio />
      </>
    )
  }
}
