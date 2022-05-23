/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_rector from '../../componentes/Componentes_rector/Navegacion_rector'
import Contenido_Generar_Reportes_rector from "../../componentes/Componentes_rector/Contenido_Generar_Reportes_rector";

export default class Generar_Reportes_contratista extends React.Component {
  render() {
    return (
      <>
        <Navegacion_rector />
        <Contenido_Generar_Reportes_rector />
      </>
    )
  }
}
