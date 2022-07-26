import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './contenidoUsuariosAdmin.css'
import axios from "axios";
import env from '../../env.json';
import {faSearch, faUserEdit, faTrash, faAdd} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ContenidoUsuariosAdmin = () => {

  const [users, setUsers] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const navigate = useNavigate();

  const peticionGet = async () => {
    try {
    const response = await axios.get(`${env.host}/usuarios/listar`);
      const data = response.data.map(el => {
        el.roles = el.roles.map(ele => ele.nombre).join(',');
        
        return el;
      });
      setUsers(data);
      setTablaUsuarios(data);
    } catch (e) {
      alert("No hay usuarios en el sistema");
    }
    }

    const handleChange = e => {
      setBusqueda(e.target.value);
      filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
      var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
          if (elemento.roles.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
              || elemento.unaPersona.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
              || elemento.unaPersona.apellido.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())

          ) {
              return elemento;
          }
      });
      setUsers(resultadosBusqueda);
  }


  useEffect(() => {
     peticionGet();
  }, [])

  return (
    <div id="usuarios_div">
      <div id='usuarios_divruta'>
        <img id="usuarios_iconos" src='/img/icono_inicio.png' alt='' />
        <Link id="usuarios_linkinicio" to="/Inicio">Inicio/</Link>
        <img id="usuarios_iconos" src='/img/icono_administrador.png' alt='' />
        <label id='usuarios_textrutas'>Administrador/</label>
        <label id='usuarios_textrutas'>Usuarios</label>
      </div>

      <div id="buscar_form">
    
      
                <div id="buscar_divinfomacion" className="containerInput">
                <button
                 className="btn btn-primary"
                 onClick={() => navigate("/crear_usuario_admin")}>
                      <FontAwesomeIcon icon={faAdd}/>
                    </button>
                    
                    <input
                        className="form-control inputBuscar"
                        value={busqueda}
                        placeholder="Busqueda por Nombre, apellido o rol"
                        onChange={handleChange}
                    />
                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                
                </div>
            </div>
      <div className="table-responsive">
      <table id="usuarios_tabla" className="table table-striped">
        <thead>
        <tr>
          <th id="usuarios_th" scope="col">Nombre</th>
          <th id="usuarios_th" scope="col">Apellido</th>
          <th id="usuarios_th" scope="col">Rol</th>
          <th id="usuarios_th" scope="col">Estado</th>
          <th id="usuarios_th" scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.unaPersona.nombre}</td>
            <td>{user.unaPersona.apellido}</td>
            <td>{user.roles}</td>
            <td>{user.unaPersona.estado}</td>
            <td>
              <button
                className="btn btn-primary btn-block"
                onClick={() => navigate("/editar_usuario_admin", {state:{id:user.id}})}><FontAwesomeIcon icon={faUserEdit} /> </button>
              {"  "}
              <button
                className="btn btn-danger"
                onClick={() => navigate("/eliminar_usuario_admin", {state:{id:user.id}})}> <FontAwesomeIcon icon={faTrash} /></button>
              </td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default ContenidoUsuariosAdmin;
