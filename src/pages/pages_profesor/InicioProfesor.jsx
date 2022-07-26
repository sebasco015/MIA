/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionProfesor from '../../componentes/Componentes_profesor/NavegacionProfesor';
import ValidateRolProfesor from "../../componentes/Componentes_profesor/ValidateRolProfesor";
import ContenidoInicio from '../../componentes/ContenidoInicio';

 const InicioProfesor = () => (
      <>
        <ValidateRolProfesor />
        <NavegacionProfesor />
        <ContenidoInicio />
      </>
    )

export default InicioProfesor;