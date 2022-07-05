import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import './contenidoCargarDatosAdmin.css'
import env from '../env.json';

const ContenidoCambiarClaveAdmin = () => {
  
  const [ type, setType] = useState("");
  const [ selectedFile, setSelectedFile ] = useState(null);

  const FileUploader = ({onFileSelect}) => {
    const fileInput = useRef(null)
    const handleFileInput = (e) => {
      onFileSelect(e.target.files[0])
      if( file.size > 50024)
      onFileSelectError({error: 'El tamaño del archivo excede las 50MB'});
      else onFileSelectSuccess(file);
    };
  }

const submitForm = () => {
  const formData = new FormData();
  formData.append("type", );
  formData.append("file", selectedFile);

  axios
  .post(`${env.host}/excel`, formData)
  .then((res) => {
    alert("Archivo subiodo Correctamente!");
  })
  .catch((err) => alert("Error al subir el Archivo"));
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
          onchange={(e) => setType(e.target.value)}>
            <option>Tipo de Archivo:</option>
            <option value="pais">Pais</option>
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
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </div>
      </form>
      <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({error}) => alert(error)}
          />
      <div id="datos_boton">
        <button 
           type="submit" 
           className="btn btn-danger"
           onClick={submitForm}
        >Cargar Datos</button>
      </div>
    </div>
  );
}

export default ContenidoCambiarClaveAdmin;
