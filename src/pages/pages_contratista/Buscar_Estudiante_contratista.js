/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_contratista from '../../componentes/Componentes_contratista/Navegacion_contratista'
import Contenido_Buscar_Estudiante_contratista from "../../componentes/Componentes_contratista/Contenido_Buscar_Estudiante_contratista";

export default class Buscar_Estudiante_contratista extends React.Component {
  render() {
    return (
      <>
        <Navegacion_contratista />
        <Contenido_Buscar_Estudiante_contratista />
      </>
    )
  }
}
