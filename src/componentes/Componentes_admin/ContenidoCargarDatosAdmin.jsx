import React from "react";
import { Link } from "react-router-dom";
import './contenidoCargarDatosAdmin.css'

const ContenidoCambiarClaveAdmin = () => {
  return (
    <div id="datos_div">
      <div id='datos_divruta'>
        <img id="datos_iconos" src='/img/icono_inicio.png' alt='' />
        <Link id="datos_linkinicio" to="/Inicio">Inicio/</Link>
        <img id="datos_iconos" src='/img/icono_administrador.png' alt='' />
        <label id='datos_textrutas'>Administrador/</label>
        <label id='datos_textrutas'>Cargar Datos</label>
      </div>
      <form id="datos_formulario">
        <div id="datos_divinfomacion">
          <label htmlFor="exampleInputEmail1" id="datos_inputstext" >Tipo de Archivo:*</label>
          <select className="form-control" >
            <option>Tipo de Archivo:</option>
            <option>.jpg</option>
            <option>.png</option>
            <option>.rar</option>
            <option>.zip</option>
            <option>Documento de word</option>
            <option>.pdf</option>
          </select>
        </div>
        
        <div id="datos_divinfomacion">
          <label htmlFor="exampleInputEmail1" id="datos_inputstext" >Archivo:*</label>
          <input id="cargue_archivo" type="file" className="form-control" aria-describedby="emailHelp" />
        </div>
      </form>
      <div id="datos_boton">
        <button type="submit" className="btn btn-danger">Cargar Datos</button>
      </div>
    </div>
  );
}

export default ContenidoCambiarClaveAdmin;
