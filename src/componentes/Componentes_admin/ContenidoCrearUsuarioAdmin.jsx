import React, { useEffect, useRef, useState} from 'react'
import './contenidoCrearUsuarioAdmin.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import  env from "../../env.json";


const ContenidoCrearUsuarioAdmin = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  const [ roles, setRol ] = useState([]);
  const [ tipoDocumento, setTipoDocumento ] = useState([]);
  const [ municipio, setMunicipio ] = useState([]);
  const [ username , setUsername ] = useState('');
  const [ email , setEmail ] = useState('');
  const [ unRol, setUnRol ] = useState('');
  const [ unTipoDocumento, setUnTipoDocumento ] = useState('');
  const [ numeroDocumento, setNumeroDocumento ] = useState('');
  const [ telefono, setTelefono ] = useState('');
  const [ nombre, setNombre ] = useState('');
  const [ apellido, setApellido ] = useState('');
  const [ fechaNacimiento, setFechaNacimiento ] = useState('');
  const [ unMunicipio, setUnMunicipio ] = useState('');
  const [ direccion, setDireccion ] = useState('');
  const [ barrio, setBarrio ] = useState('');
 
  const obtenerRol= async () => {
    try {
      const response = await axios.get(`${env.host}/rol/listar`);	
      setRol(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const parseElement = async element => {
    const value = JSON.parse(element.value);
    if(element.name === "lug_nacimiento") {
      setUnMunicipio({idMunicipio: value.idMunicipio, munNombre: value.nombre});
    }
  };

  const obtenerTipoDocumento= async () => {
    try {
      const response = await axios.get(`${env.host}/tipoDocumento`);	
      setTipoDocumento(response.data);
      } catch (err) {
      console.log(err);
      }
    };

    const obtenerMunicipio= async () => {
      try {
        const response = await axios.get(`${env.host}/municipios/listar`);
        setMunicipio(response.data);
        } catch (err) {
        console.log(err);
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          //const fecha = fechaNacimiento.split('-');
          const data = {               
            username,
            email,
            unRol:
             { 'id': unRol },   
            unaPersona: {
              unTipoDocumento:
               { idTipoDocumento: parseInt(unTipoDocumento)},
               numeroDocumento,
               telefono,
               nombre,
               apellido,
               fechaNacimiento,//: `${fecha[2]}-${fecha[1]}-${fecha[0]}`,
               lugarDeNacimiento: unMunicipio,
               barrio,
              direccion,
          },
          };

          await axios.post(`${env.host}/auth/registrar`, data);
          e.target.reset();
          alert("Usuario creado correctamente");
        } catch (e) {
          console.log(e);
          alert("Error al crear el usuario");
        }
      }

      useEffect(() => {
        (async () => {
          await obtenerRol();
          await obtenerTipoDocumento();
          await obtenerMunicipio();
        } )();
      }, []);

  return (
    <div id='crearUsuario_div'>
      <div id='crearUsuario_divruta'>
        <img id="crearUsuario_iconos" src='/img/icono_inicio.png' alt='' />
        <Link id="crearUsuario_linkinicio" to="/InicioAdmin">Inicio/</Link>
        <img id="crearUsuario_iconos" src='/img/icono_administrador.png' alt='' />
        <label id='crearUsuario_textrutas'>Usuario/</label>
        <label id='crearUsuario_textrutas'>Registro Usuario</label>
      </div>
      <form id="crearUsuario_form" onSubmit={ handleSubmit} ref={formRef}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            id="huella_inputs"
            className="form-control"
            placeholder="Usuario:*"
            onChange= {e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="huella_inputs"
            className="form-control"
            placeholder="Email:*"
            onChange= {e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Rol:*</label>
          <select
            className="form-select"
            aria-label='default select example'
            id="huella_inputs"
            onChange={e => setUnRol(e.target.value)}
          >
            <option>Seleccione un rol</option>
            {roles && roles.map(rol =>
              <option key={rol.id} value={rol.id}>{rol.nombre}</option> 
            )} 
          </select>      
        </div>
        <div>
          <label>Tipo Documento:</label>
          <select
            className="form-select"
            aria-label='default select example'
            id="huella_inputs"
            onChange={e => setUnTipoDocumento(e.target.value)}
            >
            <option> Seleccione tipo documento </option>
            {tipoDocumento && tipoDocumento.map(tipoDocumentos =>
              <option key={tipoDocumentos.idTipoDocumento} value={tipoDocumentos.idTipoDocumento}>{tipoDocumentos.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Numero Documento:</label>
          <input
            type="number"
            id="huella_inputs"
            className="form-control"
            placeholder="Numero de documento:*"
            onChange={e => setNumeroDocumento(e.target.value)}
          />
        </div>
        <div>
          <label>Telefono:</label>
          <input
            type="number"
            id="huella_inputs"
            className="form-control"
            placeholder="Telefono:*"
            onChange={e => setTelefono(e.target.value)}
          />
        </div>
        <div>
          <label>Nombres:</label>
          <input
            type="text"
            id="huella_inputs"
            className="form-control" 
            placeholder="Nombres:*"
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Apellidos:</label>
          <input
            type="text"
            id="huella_inputs"
            className="form-control"
            placeholder="Apellidos:*"
            onChange={e => setApellido(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha Nacimiento:</label>
          <input
            type="date"
            id="huella_inputs"
            className="form-control"
            placeholder="Fecha Nacimiento:*"
            onChange={e => setFechaNacimiento(e.target.value)}
          />
        </div>
        <div>
          <label>Lugar Nacimiento:*</label>
           <select
            className="form-select" 
            aria-label='default select example'
            id="huella_inputs"
            name="lug_nacimiento"
            onChange={e => parseElement(e.target)}
            >
            <option>Seleccione municipio</option>
            {municipio && municipio.map(municipios =>
              <option key={municipios.idMunicipio} value={JSON.stringify(municipios)}>{municipios.nombre}</option>
            )}
          </select>
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            id="huella_inputs"
            className="form-control"
            placeholder="Dirección:*"
            onChange={e => setDireccion(e.target.value)}
          />
        </div>
        <div>
          <label>Barrio:</label>
          <input
            type="text"
            id="huella_inputs"
            className="form-control"
            placeholder="Barrio:*"
            onChange={e => setBarrio(e.target.value)}
          />
        </div>
        <div></div>
        <div>
          <button
            id="lim"
            type="button"
            className="btn btn-danger"
            onClick={ () => navigate("/usuarios_admin")}
          >Regresar</button>
          <button 
            id="lim"
            type="submit"
            className="btn btn-primary btn-block">
              Guardar
            </button>
        </div>
      </form>
    </div>
  );
}

export default ContenidoCrearUsuarioAdmin;
