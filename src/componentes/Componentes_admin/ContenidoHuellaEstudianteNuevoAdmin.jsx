import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import env from '../../env.json';
import './contenidoHuellaEstudianteNuevoAdmin.css'

const ContenidoHuellaEstudianteNuevoAdmin = () => {
  const formRef = useRef();

  const [pais, setPais] = useState([]);
  const [municipio, setMunicipio] = useState([]);
  const [institucion, setInstitucion] = useState([]);
  const [sede, setSede] = useState([]);
  const [documento, setDocumento] = useState([]);
  const [departamento, setDepartamento] = useState([]);
  const [jornada, setJornada] = useState([]);
  const [discapacidad, setDiscapacidad] = useState([]);
  const [etnia, setEtnia] = useState([]);
  const [paisOrigen, setPaisOrigen] = useState('');
  const [unMunicipio, setUnMunicipio] = useState('');
  const [unaInstitucion, setUnaInstitucion] = useState('');
  const [unaSede, setUnaSede] = useState('');
  const [director, setDirector] = useState('');
  const [unTipoDocumento, setUnTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [municipioRecidencia, setMunicipioRecidencia] = useState('');
  const [nacimientoDepartamento, setNacimientoDepartamento] = useState('');
  const [nacimientoMunicipio, setNacimientoMunicipio] = useState('');
  const [nombre1, setNombre1] = useState('');
  const [nombre2, setNombre2] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [genero, setGenero] = useState('');
  const [grado, setGrado] = useState('');
  const [direccionRecidencia, setDireccionRecidencia] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [acudiente, setAcudiente] = useState('');
  const [telefono, setTelefono] = useState('');
  const [telefonoAcudiente, setTelefonoAcudiente] = useState('');
  const [unaJornada, setUnaJornada] = useState('');
  const [unaDiscapacidad, setUnaDiscapacidad] = useState('');
  const [unaEtnia, setUnaEtnia] = useState('');

  const obtenerPais = async () => {
    try {
      const response = await axios.get(`${env.host}/paises/listar`);
      setPais(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const obtenerMunicipios = async () => {
    try {
      const response = await axios.get(`${env.host}/municipios/listar`);
      setMunicipio(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const obtenerInstituciones = async () => {
    try {
      const response = await axios.get(`${env.host}/institucion`);
      setInstitucion(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const obtenerSedes = async () => {
    try {
      const response = await axios.get(`${env.host}/sede/listar`);
      setSede(response.data);
    } catch (err) {
      console.log(err)
    }
  };

  const obtenerTipoDocumento = async () => {
   try {
     const response = await axios.get(`${env.host}/tipoDocumento`);
     setDocumento(response.data);
   } catch (err) {
     console.log(err);
   }
  };

  const obtenerDepartamento = async () => {
    try {
      const response = await axios.get(`${env.host}/departamento/listar`);
      setDepartamento(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const obtenerJornada = async () => {
    try {
      const response = await axios.get(`${env.host}/jornada/listar`);
      setJornada(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const obtenerDiscapacidad = async () => {
    try {
      const response = await axios.get(`${env.host}/discapacidad/listar`);
      setDiscapacidad(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const obtenerEtnia = async () => {
    try {
      const response = await axios.get(`${env.host}/etnia/listar`);
      setEtnia(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = {
        acudiente,
        apellido1,
        apellido2,
        direccionRecidencia,
        director: { 'id': director },
        fechaNacimiento,
        genero,
        grado,
        municipioRecidencia,
        nacimientoDepartamento,
        nacimientoMunicipio,
        nombre1,
        nombre2,
        numeroDocumento,
        paisOrigen: { 'idPais': paisOrigen },
        telefono,
        telefonoAcudiente,
        unMunicipio: { 'idMunicipio': unMunicipio },
        unTipoDocumento: { 'idTipoDocumento': unTipoDocumento },
        unaDiscapacidad: { 'idTipoDiscapacidad': unaDiscapacidad },
        unaEtnia: { 'idEtnia': unaEtnia },
        unaInstitucion: { 'idInstitucion': unaInstitucion },
        unaJornada: { 'idJornada': unaJornada },
        unaSede: { 'idSede': unaSede }
      };

      await axios.post(`${env.host}/estudiante`, data);
      e.target.reset();
      alert('Estudiante Guardado Exitosamente');
    } catch (e) {
      console.log(e);
      alert('Error, llene todos los campos');
    }
  }

  useEffect(() => {
    (async () => {
      await obtenerPais();
      await obtenerMunicipios();
      await obtenerInstituciones();
      await obtenerSedes();
      await obtenerTipoDocumento();
      await obtenerDepartamento();
      await obtenerJornada();
      await obtenerDiscapacidad();
      await obtenerEtnia();
    })();
  }, []);

  return (
    <div id='huella_div'>
      <div id='huella_divruta'>
        <img id="huella_iconos" src='/img/icono_inicio.png' alt='' />
        <Link id="huella_linkinicio" to="/Inicio">Inicio/</Link>
        <img id="huella_iconos" src='/img/icono_administrador.png' alt='' />
        <label id='huella_textrutas'>Administrador/</label>
        <label id='huella_textrutas'>Huella Estudiante Nuevo</label>
      </div>
      <form id="datos" onSubmit={ handleSubmit } ref={formRef}>
        <div>
          <label>País origen:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setPaisOrigen(e.target.value) }
          >
            <option >Selecccione un País</option>
            { pais && pais.map(paises =>
                <option key={paises.idPais} value={paises.idPais} >{paises.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Municipio:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setUnMunicipio(e.target.value) }>
            <option >Selecccione un Municipio</option>
            { municipio && municipio.map(municipios =>
                <option key={municipios.idMunicipio} value={municipios.idMunicipio}>{municipios.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Institucion:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setUnaInstitucion(e.target.value) }
          >
            <option >Selecccione una Institución</option>
            { institucion && institucion.map(instituciones =>
                <option
                  key={instituciones.idInstitucion}
                  value={instituciones.idInstitucion}
                >{instituciones.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Sede:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setUnaSede(e.target.value) }>
            <option >Selecccione una Sede</option>
            {sede.map(sedes =>
                <option key={sedes.idSede} value={sedes.idSede}>{sedes.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Director:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setDirector(e.target.value) }
          >
            <option >Selecccione un Director</option>
            { institucion && institucion.map(instituciones =>
                <option
                  key={instituciones.rector.id}
                  value={instituciones.rector.id}
                >{instituciones.rector.unaPersona.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Tipo de documento</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setUnTipoDocumento(e.target.value) }
          >
            <option >Selecccione un Tipo Documento</option>
            { documento && documento.map(documentos =>
                <option key={documentos.idTipoDocumento} value={documentos.idTipoDocumento}>{documentos.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Numero de documento</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Numero Documento:*"
            onChange={ e => setNumeroDocumento(e.target.value) }
          />
        </div>
        <div>
          <label>Municipio de residencia:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setMunicipioRecidencia(e.target.value) }
          >
            <option >Selecccione un Municipio</option>
            { municipio && municipio.map(municipios =>
                <option key={municipios.nombre} value={municipios.nombre}>{municipios.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Departamento de nacimiento:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setNacimientoDepartamento(e.target.value) }
          >
            <option >Selecccione un Departamento</option>
            { departamento && departamento.map(departamentos =>
                <option key={departamentos.nombre} value={departamentos.nombre}>{departamentos.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Municipio de nacimiento:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setNacimientoMunicipio(e.target.value) }>
            <option >Selecccione un Municipio</option>
            { municipio && municipio.map(municipios =>
                <option key={municipios.nombre} value={municipios.nombre}>{municipios.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Primer nombre:*</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Primer nombre:*"
            onChange={ e => setNombre1(e.target.value) }
          />
        </div>
        <div>
          <label>Segundo nombre:</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Segundo nombre:*"
            onChange={ e => setNombre2(e.target.value) }
          />
        </div>
        <div>
          <label>Primer apellido:*</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Primer apellido:*"
            onChange={ e => setApellido1(e.target.value) }
          />
        </div>
        <div>
          <label>Segundo apellido:*</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Segundo apellido:*"
            onChange={ e => setApellido2(e.target.value) }
          />
        </div>
        <div>
          <label>Genero:*</label>
          <select
            type="text"
            id="huella_inputs"
            className='form-select'
            aria-label="Default select example"
            placeholder="Genero:*"
            onChange={ e => setGenero(e.target.value) }>
              <option>Selecccione un Genero</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
          </select>
        </div>
        <div>
          <label>Grado:*</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Grado:*"
            onChange={ e => setGrado(e.target.value) }
          />
        </div>
        <div>
          <label>Dirección residencia:*</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Dirección residencia:*"
            onChange={ e => setDireccionRecidencia(e.target.value) }
          />
        </div>
        <div>
          <label>Fecha nacimiento:*</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Fecha nacimiento:*"
            onChange={ e => setFechaNacimiento(e.target.value) }
          />
        </div>
        <div>
          <label>Nombre acudiente:*</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Nombre acudiente:*"
            onChange={ e => setAcudiente(e.target.value) }
          />
        </div>
        <div>
          <label>Telefono/Celular:*</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Telefono/Celular:*"
            onChange={ e => setTelefono(e.target.value) }
          />
        </div>
        <div>
          <label>Telefono/Celular acudiente:*</label>
          <input
            type="text"
            id="huella_inputs"
            className='form-control'
            placeholder="Telefono/Celular Acudiente:*"
            onChange={ e => setTelefonoAcudiente(e.target.value) }
          />
        </div>
        <div>
          <label>Tipo de jornada:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setUnaJornada(e.target.value) }
          >
            <option >Selecccione una Jornada</option>
            { jornada && jornada.map(jornadas =>
                <option key={jornadas.idJornada} value={jornadas.idJornada}>{jornadas.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Tipo de discapacidad:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setUnaDiscapacidad(e.target.value) }
          >
            <option >Selecccione una Discapacidad</option>
            { discapacidad && discapacidad.map(discapacidades =>
                <option
                  key={discapacidades.idTipoDiscapacidad}
                  value={discapacidades.idTipoDiscapacidad}
                >{discapacidades.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Tipo de etnia:*</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="huella_inputs"
            onChange={ e => setUnaEtnia(e.target.value) }
          >
            <option >Selecccione una Etnia</option>
            { etnia && etnia.map(etnias =>
                <option key={etnias.idEtnia} value={etnias.idEtnia}>{etnias.nombre}</option>
            )}
          </select>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <button
            id="lim"
            type="button"
            className="btn btn-danger"
            onClick={ () => formRef.current.reset() }
          >Limpiar</button>
          <button id="lim" type="submit" className="btn btn-primary btn-block">Guardar</button>
        </div>
      </form >
    </ div >
  );
}

export default ContenidoHuellaEstudianteNuevoAdmin;
