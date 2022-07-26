/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionCoordinador from '../../componentes/Componentes_coordinador/NavegacionCoordinador'
import ContenidoHuellaEstudianteNuevoCoordinador from "../../componentes/Componentes_coordinador/ContenidoHuellaEstudianteNuevoCoordinador";
import ValidateRolCoordinador from "../../componentes/Componentes_coordinador/ValidateRolCoordinador"

const HuellaEstudianteNuevo = () => (
      <>
        <ValidateRolCoordinador />
        <NavegacionCoordinador />
        <ContenidoHuellaEstudianteNuevoCoordinador />
      </>
)

export default HuellaEstudianteNuevo;
  