/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_admin from '../../componentes/Componentes_admin/Navegacion_admin'
import Contenido_Cambiar_Clave from "../../componentes/Contenido_Cambiar_Clave";

export default class Cambiar_Clave_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_admin />
        <Contenido_Cambiar_Clave />
      </>
    )
  }
}
