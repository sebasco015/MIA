/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_coordinador from '../../componentes/Componentes_coordinador/Navegacion_coordinador'
import ContenidoSistema from "../../componentes/ContenidoSistema";

export default class Sistema_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_coordinador />
        <ContenidoSistema />
      </>
    )
  }
}
