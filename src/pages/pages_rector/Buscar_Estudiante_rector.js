/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_rector from '../../componentes/Componentes_rector/Navegacion_rector'
import Contenido_Buscar_Estudiante_rector from "../../componentes/Componentes_rector/Contenido_Buscar_Estudiante_rector";

export default class Buscar_Estudiante_rector extends React.Component {
  render() {
    return (
      <>
        <Navegacion_rector />
        <Contenido_Buscar_Estudiante_rector />
      </>
    )
  }
}
