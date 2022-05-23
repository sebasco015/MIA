/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_coordinador from '../../componentes/Componentes_coordinador/Navegacion_coordinador'
import Contenido_Cambiar_Clave from "../../componentes/Contenido_Cambiar_Clave";

export default class Cambiar_Clave_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_coordinador />
        <Contenido_Cambiar_Clave />
      </>
    )
  }
}
