import React, { useState } from "react";
import { Link } from "react-router-dom";
import './contenidoCargarDatosAdmin.css'
import env from '../../env.json';
import axios from "axios";

const ContenidoCargarDatosAdmin = () => {

  const [type, setType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = async () => {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append("type", type);
      bodyFormData.append("file", selectedFile);
      const response = await axios({
        method: "POST",
        url: `${env.host}/excel`,
        data: bodyFormData,
        headers: { "content-type": "multipart/form-data" },
      });

      if(response.status === 200 || response.status === 201) alert("Archivo cargado correctamente");
      else alert("Hubo un error porfavor verifique el archivo");
      console.log(response);
    } catch(response) {
      console.log(response);
      alert("Hubo un error porfavor verifique el archivo");
    }
  };  

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
          <select className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}>
            <option>Tipo de Archivo:</option>
            <option value="beneficiarios">Beneficiarios</option>
            <option value="etnia">Etnia</option>
            <option value="resguardo">Resguardo</option>
            <option value="departamentos">Departamentos</option>
            <option value="municipios">Municipios</option>
            <option value="instituciones">Instituciones</option>
            <option value="sedes">Sedes</option>
            <option value="estudiantes">Estudiantes</option>
          </select>
        </div>

        <div id="datos_divinfomacion">
          <label htmlFor="exampleInputEmail1" id="datos_inputstext" >Archivo:*</label>
          <input
            id="cargue_archivo"
            type="file"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </div>
      </form>

      <div id="datos_boton">
        <button
          type="submit"
          className="btn btn-danger"
          onClick={onSubmit}
        >Cargar Datos</button>
      </div>
    </div>
  );
}

export default ContenidoCargarDatosAdmin;
