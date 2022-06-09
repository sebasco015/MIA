/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_contratista from '../../componentes/Componentes_contratista/Navegacion_contratista'
import ContenidoCambiarClave from "../../componentes/ContenidoCambiarClave";

export default class Cambiar_Clave_contratista extends React.Component {
  render() {
    return (
      <>
        <Navegacion_contratista />
        <ContenidoCambiarClave />
      </>
    )
  }
}
