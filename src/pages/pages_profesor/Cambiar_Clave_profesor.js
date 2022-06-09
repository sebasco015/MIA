/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_profesor from '../../componentes/Componentes_profesor/Navegacion_profesor'
import ContenidoCambiarClave from "../../componentes/ContenidoCambiarClave";

export default class Cambiar_Clave_profesor extends React.Component {
  render() {
    return (
      <>
        <Navegacion_profesor />
        <ContenidoCambiarClave />
      </>
    )
  }
}
