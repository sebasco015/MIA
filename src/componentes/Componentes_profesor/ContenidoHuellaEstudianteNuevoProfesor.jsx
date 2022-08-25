import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import Select from "react-select";
import axios from 'axios';
import env from '../../env.json';
import './ContenidoHuellaEstudianteNuevoProfesor.css'

const ContenidoHuellaEstudianteNuevoProfesor = () => {
  const formRef = useRef();

  const [anoInf, setAnoInf] = useState('');
  const [municipio, setMunicipio] = useState([]);
  const [institucion, setInstitucion] = useState([]);
  const [sede, setSede] = useState([]);
  const [documento, setDocumento] = useState([]);
  const [departamento, setDepartamento] = useState([]);
  const [jornada, setJornada] = useState([]);
  const [discapacidad, setDiscapacidad] = useState([]);
  const [etnia, setEtnia] = useState([]);
  const [unMunicipio, setUnMunicipio] = useState('');
  const [unaInstitucion, setUnaInstitucion] = useState('');
  const [unaSede, setUnaSede] = useState('');
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
  const [grado, setGrado] = useState([]);
  const [direccionRecidencia, setDireccionRecidencia] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sisben, setSisben] = useState('');
  const [telefono, setTelefono] = useState('');
  const [estrato, setEstrato] = useState('');
  const [unaJornada, setUnaJornada] = useState('');
  const [unaDiscapacidad, setUnaDiscapacidad] = useState('');
  const [unaEtnia, setUnaEtnia] = useState('');
  const [pobVicCon, setPobVicCon] = useState([]);
  const [unaPobVicCon, setUnaPobVicCon] = useState('');
  const [resguardo, setResguardo] = useState([]);
  const [unResguardo, setUnResguardo] = useState('');
  const [caracter, setCaracter] = useState([]);
  const [unCaracter, setUnCaracter] = useState('');
  const [especialidad, setEspecialidad] = useState([]);
  const [unaEspecialidad, setUnaEspecialidad] = useState('');
  const [unGrado, setUnGrado] = useState('');
  const [grupo, setGrupo] = useState('');
  const [internado, setInternado] = useState([]);
  const [unInternado, setUnInternado] = useState('');

  const obtenerPobVicCon = async () => {
    try {
      const response = await axios.get(`${env.host}/pobVic/listar`);
      console.log(response.data);
      setPobVicCon(response.data.map(el => ({
        value:el.codigo,
        key: el.codigo, 
        label: el.nombre
      })));
    } catch (err) {
      console.log(err);
    }
  };

  const optionsGenero = [
    {value: "M", label: "Masculino", key:"G-1"},
    {value: "F", label: "Femenino", key:"G-1"},
   ];

  const obtenerMunicipios = async () => {
    try {
      const response = await axios.get(`${env.host}/municipios/listar`);
      console.log(response.data);
      setMunicipio(response.data.map( el => ({
        value:el.idMunicipio,
        label: el.nombre,
        key: el.idMunicipio
      })));
    } catch (err) {
      console.log(err);
    }
  };

  const obtenerInstituciones = async () => {
    try {
      const response = await axios.get(`${env.host}/institucion`);
      setInstitucion(response.data.map(el => ({
        value: el.idInstitucion,
        label: el.nombre,
        key: el.idInstitucion
      })));
    } catch (err) {
      console.log(err);
    }
  };

  const obtenerSedes = async () => {
    try {
      const response = await axios.get(`${env.host}/sede/listar`);
      setSede(response.data.map( el => ({
        value: el.idSede,
        label: el.nombre,
        key: el.idSede
      })));
    } catch (err) {
      console.log(err)
    }
  };

  const obtenerTipoDocumento = async () => {
   try {
     const response = await axios.get(`${env.host}/tipoDocumento`);
     setDocumento(response.data.map( el => ({
      value: el.idTipoDocumento,
      label: el.nombre,
      key: el.idTipoDocumento
     })));
   } catch (err) {
     console.log(err);
   }
  };

  const obtenerDepartamento = async () => {
    try {
      const response = await axios.get(`${env.host}/departamento/listar`);
      setDepartamento(response.data.map(el => ({
        value:el.codigo,
        label: el.nombre,
        key: el.codigo
      })));
    } catch (err) {
      console.log(err);
    }
  };

  const obtenerJornada = async () => {
    try {
      const response = await axios.get(`${env.host}/jornada/listar`);
      setJornada(response.data.map(el => ({
        value:el.codigo,
        label: el.nombre,
        key: el.codigo
      })));
    } catch (err) {
      console.log(err);
    }
  }

  const obtenerDiscapacidad = async () => {
    try {
      const response = await axios.get(`${env.host}/discapacidad/listar`);
      console.log(response.data);
      setDiscapacidad(response.data.map(el => ({
        value:el.codigo,
        label: el.nombre,
        key: el.codigo
      })));
    } catch (err) {
      console.log(err);
    }
  }

  const obtenerEtnia = async () => {
    try {
      const response = await axios.get(`${env.host}/etnia/listar`);
      setEtnia(response.data.map(el => ({
        value:el.codigo,
        label: el.nombre,
        key: el.codigo
      })));
    } catch (err) {
      console.log(err);
    }
  };

  // const obtenerResguardo = async () => {
  //   try {
  //     const response = await axios.get(`${env.host}/resguardo/listar`);
  //     setResguardo(response.data.map(el => ({
  //       value: el.codigo,
  //       label: el.nombre,
  //       key: el.codigo
  //     })));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const obtenerCaracter = async () => {
    try {
      const response = await axios.get(`${env.host}/caracter/listar`);
      setCaracter(response.data.map(el => ({
        value: el.codigo,
        label: el.nombre,
        key: el.codigo
      })));    
    } catch (err) {
      
    }
  };

  const obtenerEspecialidad = async () => {
    try {
      const response = await axios.get(`${env.host}/especialidad/listar`);
      setEspecialidad(response.data.map(el => ({
        value: el.codigo,
        label: el.nombre,
        key: el.codigo
      })));
    } catch (err) {
      console.log(err);  
    }
  };

  const obtenerGrado = async () => {
    try {
      const response = await axios.get(`${env.host}/grado/listar`);
      setGrado(response.data.map(el => ({
        value: el.codigo,
        label: el.nombre,
        key: el.codigo
      })));
    } catch (err) {
      console.log(err);
    }
  };

  const obtenerInternado = async () => {
    try {
      const response = await axios.get(`${env.host}/internado/listar`);
      setInternado(response.data.map(el => ({
        value: el.codigo,
        label: el.nombre,
        key: el.codigo
      })));  
    } catch (err) {
        console.log(err);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = {
        anoInf,
        apellido1,
        apellido2,
        direccionRecidencia,
        estrato,
        // director: { 'id': director },
        fechaNacimiento,
        genero,
        grado,
        municipioRecidencia,
        nacimientoDepartamento,
        nacimientoMunicipio,
        nombre1,
        nombre2,
        numeroDocumento,
        sisben,
        unaPobVicCon: {'codigo': unaPobVicCon},
        // paisOrigen: { 'idPais': paisOrigen },
        telefono,
        unMunicipio: { 'codigo': unMunicipio },
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
      await obtenerMunicipios();
      await obtenerInstituciones();
      await obtenerSedes();
      await obtenerTipoDocumento();
      await obtenerDepartamento();
      await obtenerJornada();
      await obtenerDiscapacidad();
      await obtenerEtnia();
      await obtenerPobVicCon();
      // await obtenerResguardo();
      await obtenerCaracter();
      await obtenerEspecialidad();
      await obtenerGrado();
      await obtenerInternado();
    })();
  }, []);

  return (
    <div id='huella_div'>
      <div id='huella_divruta'>
        <img id="huella_iconos" src='/img/icono_inicio.png' alt='' />
        <Link id="huella_linkinicio" to="/Inicio">Inicio/</Link>
        <img id="huella_iconos" src='/img/icono_administrador.png' alt='' />
        <label id='huella_textrutas'>Administrador/</label>
        <label id='huella_textrutas'>Estudiante Nuevo</label>
      </div>
      <form  onSubmit={ handleSubmit } ref={formRef} id="est_form">
        
        <div className="row">
          <div className="col-md-3">
            <label for="infoA">Año de Informacion:*</label>
            <input
              className="form-control"
              aria-label="Default select example"
              id="infoA"
              name="id_infoA"
              placeholder="Año de Informacion:*"
              onChange={ e => setAnoInf(e.target.value) }
            />
          </div>
          <div className='col-md-3'>
            <label for="municipio">Municipio:*</label>
            <Select
              className="selecpicker"
              aria-label="Default select example"
              id="municipio"
              name="id_municipio"
              placeholder="Seleccione un Municipio*"
              options={municipio}
              onChange={ e => setUnMunicipio(e) }
            />
          </div>
          <div className='col-md-3'>
            <label for="institucion">Institucion:*</label>
            <Select
              className="selecpicker"
              aria-label="Default select example"
              id="institucion"
              name='id_institucion'
              placeholder="Seleccione una Institucion*"
              options={institucion}
              onChange={ e => setUnaInstitucion(e) }
            />
          </div>
          <div className='col-md-3'>
            <label for="sede">Sede:*</label>
            <Select
              className="selecpicker"
              aria-label="Default select example"
              id="sede"
              name='id_sede'
              options={sede}
              placeholder="Seleccione una Sede*"
              onChange={ e => setUnaSede(e) }
            />
          </div>
        </div> 

        <div className='row'>
          <div className='col-md-3'>
            <label for="tipoDocumento">Tipo de documento</label>
            <Select
              className="selecpicker"
              aria-label="Default select example"
              id="tipoDocumento"
              options={documento}
              placeholder="Seleccione un tipo de Documento*"
              onChange={ e => setUnTipoDocumento(e) }
            />
          </div>
          <div className='col-md-3'>
            <label for="numDocumento">Numero de Documento:</label>
            <input
              type="text"
              id="numDocumento"
              className='form-control'
              placeholder="Numero Documento:*"
              onChange={ e => setNumeroDocumento(e.target.value) }
            />
          </div>
          <div className='col-md-3'>
            <label for="1apellido">Primer apellido:*</label>
            <input
              type="text"
              id="1apellido"
              className='form-control'
              placeholder="Primer apellido:*"
              onChange={ e => setApellido1(e.target.value) }
            />
          </div>
          <div className='col-md-3'>
            <label for="2apellido">Segundo apellido:*</label>
            <input
              type="text"
              id="2apellido"
              className='form-control'
              placeholder="Segundo apellido:*"
              onChange={ e => setApellido2(e.target.value) }
            />
          </div>
          
        </div>

        <div className="row">
          <div className='col-md-3'>
            <label for="1nombre">Primer nombre:*</label>
            <input
              type="text"
              id="1nombre"
              className='form-control'
              placeholder="Primer nombre:*"
              onChange={ e => setNombre1(e.target.value) }
            />
          </div>
          <div className='col-md-3'>
            <label for="2nombre">Segundo nombre:</label>
            <input
              type="text"
              id="2nombre"
              className='form-control'
              placeholder="Segundo nombre:*"
              onChange={ e => setNombre2(e.target.value) }
            />
          </div>
          <div className='col-md-3'>
            <label for="depNacimiento">Departamento de nacimiento:*</label>
            <Select
              className="selecpicker"
              aria-label="Default select example"
              id="depNacimiento"
              name='id_departamento'
              placeholder="Seleccione departamento de Nacimiento"
              options={departamento}
              onChange={ e => setNacimientoDepartamento(e) }
            />
          </div>
          <div className='col-md-3'>
            <label for="munResidencia">Municipio de residencia:*</label>
            <Select
              className="selecpicker"
              aria-label="Default select example"
              id="munResidencia"
              name='id_municipioRes'
              options={municipio}
              placeholder="Seleccione municipio de residencia:*"
              onChange={ e => setMunicipioRecidencia(e) }
            />
          </div>
        </div>        

        <div className="row">                 
          <div className='col-md-3'>
            <label for="dirRes">Dirección residencia:*</label>
            <input
              type="text"
              id="dirRes"
              className='form-control'
              placeholder="Dirección residencia:*"
              onChange={ e => setDireccionRecidencia(e.target.value) }
            />
          </div>
          <div className='col-md-3'>
            <label for="telefono">Telefono/Celular:*</label>
            <input
              type="text"
              id="telefono"
              className='form-control'
              placeholder="Telefono/Celular:*"
              onChange={ e => setTelefono(e.target.value) }
            />
          </div>
          <div className='col-md-3'>
            <label for="estrato">Estrato:*</label>
            <input
              type="number"
              id="estrato"
              className='form-control'
              placeholder="Estrato Socioconómico:*"
              onChange={ e => setEstrato(e.target.value) }
            />
          </div>
          <div className='col-md-3'>
            <label for="sisben">Sisben:*</label>
            <input
              type="text"
              id="sisben"
              className='form-control'
              placeholder="Nivel de Sisben:*"
              onChange={ e => setSisben(e.target.value) }
            />
          </div>       
        </div> 

        <div className="row">       
          <div className='col-md-3'>
            <label for="birthdate">Fecha nacimiento:*</label>
            <input
              type="date"
              id="birthdate"
              className='form-control'
              placeholder="Fecha nacimiento:*"
              onChange={ e => setFechaNacimiento(e.target.value) }
            />
          </div>
          <div className="col-md-3">
            <label for="genero">Genero:*</label>
            <Select
              type="text"
              id="genero"
              name='id_genero'
              className='selecpicker'
              aria-label="Default select example"
              placeholder="Genero:*"
              options={optionsGenero}
              onChange={ e => setGenero(e) }
            />
          </div>
          <div className='col-md-3'>
            <label for="pobVicCon">Pob. Victimas Conflicto:*</label>
            <Select 
              className='selecpicker'
              id="pobVicCon"
              name='id_pob'
              options={pobVicCon}
              placeholder="Seleccione una Opicion:*"
              onChange={ e => setUnaPobVicCon(e)}
            />
          </div>
          <div className='col-md-3'>
            <label for="discapacidad">Tipo de discapacidad:*</label>
            <Select
              className="selecpicker"
              aria-label="Default select example"
              id="discapacidad"
              name='id_discapacidad'
              placeholder="Seleccione una Discapacidad:*"
              options={discapacidad}
              onChange={ e => setUnaDiscapacidad(e) }
            />
          </div> 
        </div>

        <div className="row"> 
          <div className='col-md-3'>
            <label for="etnia">Tipo de etnia:*</label>
            <Select
              className="selecpicker"
              aria-label="Default select example"
              id="etnia"
              name='id_etnia'
              options={etnia}
              placeholder="Seleccione una etnia"
              onChange={ e => setUnaEtnia(e) }
          />
          </div>  
          <div className="col-md-3">
            <label for="res">Resguardo:*</label>
            <Select
              className='selecpicker'
              options={resguardo}
              id="res"
              name='id_resguardo'
              onChange={ e => setUnResguardo(e)}
              placeholder="Seleccione un Resguardo"
            />
          </div>
          <div className='col-md-3'>
            <label>Tipo de jornada:*</label>
            <Select
              className="selecpicker"
              aria-label="Default select example"
              id="jornada"
              name='id_jornada'
              options={jornada}
              placeholder="Seleccione una jornada:*"
              onChange={ e => setUnaJornada(e) }
            />
          </div>
          <div className='col-md-3'>
              <label for="caracter">Caracter:*</label>
              <Select 
                name="id_caracter" 
                aria-label='default select example'
                id="caracter" 
                className='selecpicker'
                options={caracter}
                placeholder="Seleccione un caracter:*"
                onChange={ e => setUnCaracter(e)}
              />
          </div>      
        </div>
        
        <div className='row'>
          <div className='col-md-3'>
            <label for="especialidad">Especialidad:*</label>
            <Select 
              name="id_especialidad" 
              id="especialidad"
              placeholder="Seleccione una Especialidad:*"
              options={especialidad}
              onChange={e => setUnaEspecialidad(e)}
              className="selecpicker"
              aria-label='default select example' 
              />
          </div>
          <div className='col-md-3'>
              <label for="grado">Grado:*</label>
              <Select
                id="grado"
                name='id_grado'
                className='selecpicker'
                placeholder="Grado:*"
                options={grado}
                onChange={ e => setUnGrado(e) }
              />
          </div>
          <div className='col-md-3'>
            <label for="grupo">Grupo:*</label>
            <input 
              type="number"
              id="grupo"
              className='form-control'
              placeholder='Grupo:*'
              onChange={ e => setGrupo(e.target.value)}
            />
          </div>
          <div className='col-md-3'>
            <label for="internado">Internado:*</label>
            <Select 
              name="id_internado" 
              id="internado" 
              className='selecpicker'
              options={internado}
              onChange={ e => setUnInternado(e)}
              placeholder="Seleccione un Internado"
              aria-label='default select example'
            />
          </div>
        </div>

        <div className="col-md-12" id='divbutton'>
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

export default ContenidoHuellaEstudianteNuevoProfesor;
