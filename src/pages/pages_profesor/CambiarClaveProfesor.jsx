/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionProfesor from '../../componentes/Componentes_profesor/NavegacionProfesor';
import ValidateRolProfesor from "../../componentes/Componentes_profesor/ValidateRolProfesor";
import ContenidoCambiarClave from "../../componentes/ContenidoCambiarClave";

 const CambiarClaveProfesor = () => (
      <>
        <ValidateRolProfesor />
        <NavegacionProfesor />
        <ContenidoCambiarClave />
      </>
    )

export default CambiarClaveProfesor;