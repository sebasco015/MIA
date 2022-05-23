/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_profesor from '../../componentes/Componentes_profesor/Navegacion_profesor'
import Contenido_Buscar_Estudiante_profesor from '../../componentes/Componentes_profesor/Contenido_Buscar_Estudiante_profesor'

export default class Buscar_Estudiante_profesor extends React.Component {
  render() {
    return (
      <>
        <Navegacion_profesor />
        <Contenido_Buscar_Estudiante_profesor />
      </>
    )
  }
}
