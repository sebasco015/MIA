/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_profesor from '../../componentes/Componentes_profesor/Navegacion_profesor'
import Contenido_Cambiar_Clave from "../../componentes/Contenido_Cambiar_Clave";

export default class Cambiar_Clave_profesor extends React.Component {
  render() {
    return (
      <>
        <Navegacion_profesor />
        <Contenido_Cambiar_Clave />
      </>
    )
  }
}
