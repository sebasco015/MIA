/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_contratista from '../../componentes/Componentes_contratista/Navegacion_contratista'
import ContenidoSistema from "../../componentes/ContenidoSistema";

export default class Sistema_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_contratista />
        <ContenidoSistema />
      </>
    )
  }
}
