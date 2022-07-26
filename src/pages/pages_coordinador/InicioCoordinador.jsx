/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ValidateRolCoordinador from '../../componentes/Componentes_coordinador/ValidateRolCoordinador';
import NavegacionCoordinador from '../../componentes/Componentes_coordinador/NavegacionCoordinador';
import ContenidoInicio from '../../componentes/ContenidoInicio';

export default class Inicio_admin extends React.Component {
  render() {
    return (
      <>
      <ValidateRolCoordinador />
        <NavegacionCoordinador />
        <ContenidoInicio />
      </>
    )
  }
}
