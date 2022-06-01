/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import Contenido_Cambiar_Clave from "../../componentes/Contenido_Cambiar_Clave";

export default class Cambiar_Clave_admin extends React.Component {
  render() {
    return (
      <>
        <NavegacionAdmin />
        <Contenido_Cambiar_Clave />
      </>
    )
  }
}
