import React from "react";
import ValidateRolContratista from "../../componentes/Componentes_contratista/ValidateRolContratista";
import NavegacionContratista from '../../componentes/Componentes_contratista/NavegacionContratista'
import ContenidoInicio from '../../componentes/ContenidoInicio';

 const InicioContratista = () =>  (
      <>
        <ValidateRolContratista />
        <NavegacionContratista />
        <ContenidoInicio />
      </>
    
 );

export default InicioContratista;