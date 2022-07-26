/* eslint-disable react/jsx-pascal-case */
import React from "react";
import NavegacionProfesor from '../../componentes/Componentes_profesor/NavegacionProfesor';
import ValidateRolProfesor from '../../componentes/Componentes_profesor/ValidateRolProfesor';
import ContenidoSistema from "../../componentes/ContenidoSistema";

 const SistemaProfesor = () => (
      <>
        <ValidateRolProfesor />
        <NavegacionProfesor />
        <ContenidoSistema />
      </>
    )

export default SistemaProfesor;