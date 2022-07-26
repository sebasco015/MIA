/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ValidateRolProfesor from "../../componentes/Componentes_profesor/ValidateRolProfesor";
import NavegacionProfesor from '../../componentes/Componentes_profesor/NavegacionProfesor';
import ContenidoHuellaEstudianteNuevoProfesor from "../../componentes/Componentes_profesor/ContenidoHuellaEstudianteNuevoProfesor";

const HuellaEstudianteProfesor = () => (
      <>
        <ValidateRolProfesor />
        <NavegacionProfesor />
        <ContenidoHuellaEstudianteNuevoProfesor />
      </>
    )

export default  HuellaEstudianteProfesor;