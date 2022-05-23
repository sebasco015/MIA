/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_contratista from '../../componentes/Componentes_contratista/Navegacion_contratista'
import Contenido_Cambiar_Clave from "../../componentes/Contenido_Cambiar_Clave";

export default class Cambiar_Clave_contratista extends React.Component {
  render() {
    return (
      <>
        <Navegacion_contratista />
        <Contenido_Cambiar_Clave />
      </>
    )
  }
}
