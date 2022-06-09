/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_coordinador from '../../componentes/Componentes_coordinador/Navegacion_coordinador'
import ContenidoCambiarClave from "../../componentes/ContenidoCambiarClave";

export default class Cambiar_Clave_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_coordinador />
        <ContenidoCambiarClave />
      </>
    )
  }
}
