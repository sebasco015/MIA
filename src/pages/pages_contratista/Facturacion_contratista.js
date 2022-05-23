/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_contratista from '../../componentes/Componentes_contratista/Navegacion_contratista'
import Contenido_Facturacion_contratista from "../../componentes/Componentes_contratista/Contenido_Facturacion_contratista";

export default class Facturacion_contratista extends React.Component {
  render() {
    return (
      <>
        <Navegacion_contratista />
        <Contenido_Facturacion_contratista />
      </>
    )
  }
}
