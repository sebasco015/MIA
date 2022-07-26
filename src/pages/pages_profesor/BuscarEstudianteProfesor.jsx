/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionProfesor from '../../componentes/Componentes_profesor/NavegacionProfesor';
import ValidateRolProfesor from "../../componentes/Componentes_profesor/ValidateRolProfesor";
import ContenidoBuscarEstudianteProfesor from '../../componentes/Componentes_profesor/ContenidoBuscarEstudianteProfesor'


const BuscarEstudianteProfesor = () => (
      <>
        <ValidateRolProfesor />
        <NavegacionProfesor />
        <ContenidoBuscarEstudianteProfesor />
      </>
    )

export default BuscarEstudianteProfesor;