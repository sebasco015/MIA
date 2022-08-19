import React, { useEffect, useState} from 'react'
import './contenidoCrearUsuarioAdmin.css'
import { Link, useNavigate, useLocation  } from "react-router-dom";
import axios from "axios";
import  env from "../../env.json";



  
function TicketMaster_Edit(props) {
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

  const navigate = useNavigate();
  const location = useLocation();

 
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

      
      useEffect (() => {
        console.log(location.state.id);
        axios.get(`${env.host}/usuarios/listar/` + location.state.id).then((response) => {
            setUsername (response.data.username);
            setEmail (response.data.email);
            setUnRol (response.data.roles[0]);
            setUnTipoDocumento (response.data.unaPersona.unTipoDocumento);
            setNumeroDocumento (response.data.unaPersona.numeroDocumento); 
            setTelefono (response.data.unaPersona.telefono);
            setNombre (response.data.unaPersona.nombre);
            setApellido (response.data.unaPersona.apellido);
            setFechaNacimiento (response.data.unaPersona.fechaNacimiento);
            setUnMunicipio (response.data.unaPersona.lugarDeNacimiento); 
            setDireccion (response.data.unaPersona.direccion);
            setBarrio (response.data.unaPersona.barrio);
            console.log(response.data);
         });
      },[]);

      
      const editData = e => {
        e.preventDefault();
        axios.put(`${env.host}/usuarios/actualizar/` + location.state.id, {
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
               fechaNacimiento,
               lugarDeNacimiento: unMunicipio,
               barrio,
              direccion, 
            },
        });
        navigate(`/usuarios_admin`);
    };

  
   

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
        <label id='crearUsuario_textrutas'>Actulizar Usuario</label>
      </div>
      <form id="crearUsuario_form" onSubmit={editData} >
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            id="huella_inputs"
            className="form-control"
            placeholder="Usuario:*"
            value={username}
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
            value={email}
            onChange= {e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Rol:*</label>
          <select
            className="form-select"
            aria-label='default select example'
            id="huella_inputs"
            value={unRol.id}
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
            value={unTipoDocumento.idTipoDocumento}
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
            value={numeroDocumento}
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
            value={telefono}
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
            value={nombre}
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
            value={apellido}
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
            value={fechaNacimiento}
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
            value={unMunicipio.idMunicipio}
            onChange={e => parseElement(e.target)}
            >
            <option>Seleccione municipio</option>
            {municipio && municipio.map(municipios =>
              <option key={municipios.idMunicipio} value={municipios.idMunicipio}>{municipios.nombre}</option>
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
            value={direccion}
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
            value={barrio}
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
          >Cancelar</button>
          <button 
            id="lim"
            type="submit"
            className="btn btn-primary btn-block">
              Actulizar
            </button>
        </div>
      </form>
    </div>
  );
}

export default TicketMaster_Edit;
