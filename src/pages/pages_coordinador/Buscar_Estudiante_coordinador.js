/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_coordinador from '../../componentes/Componentes_coordinador/Navegacion_coordinador'
import Contenido_Buscar_Estudiante_coordinador from "../../componentes/Componentes_coordinador/Contenido_Buscar_Estudiante_coordinador";

export default class Buscar_Estudiante_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_coordinador />
        <Contenido_Buscar_Estudiante_coordinador />
      </>
    )
  }
}
