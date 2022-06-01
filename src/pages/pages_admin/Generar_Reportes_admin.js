import React from "react";
import NavegacionAdmin from '../../componentes/Componentes_admin/NavegacionAdmin'
import Contenido_Generar_Reportes_admin from "../../componentes/Componentes_admin/Contenido_Generar_Reportes_admin";

export default class Generar_Reportes_admin extends React.Component {
  render() {
    return (
      <>
        <NavegacionAdmin />
        <Contenido_Generar_Reportes_admin />
      </>
    )
  }
}
