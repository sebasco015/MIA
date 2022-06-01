/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_rector from '../../componentes/Componentes_rector/Navegacion_rector'
import ContenidoSistema from "../../componentes/ContenidoSistema";

export default class Sistema_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_rector />
        <ContenidoSistema />
      </>
    )
  }
}
