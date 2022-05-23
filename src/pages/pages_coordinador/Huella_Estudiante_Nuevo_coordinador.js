/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_coordinador from '../../componentes/Componentes_coordinador/Navegacion_coordinador'
import Contenido_Huella_Estudiante_Nuevo_coordinador from "../../componentes/Componentes_coordinador/Contenido_Huella_Estudiante_Nuevo_coordinador";

export default class Huella_Estudiante_Nuevo extends React.Component {
  render() {
    return (
      <>
        <Navegacion_coordinador />
        <Contenido_Huella_Estudiante_Nuevo_coordinador />
      </>
    )
  }
}