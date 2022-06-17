import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './contenidoUsuariosAdmin.css'
import axios from "axios";
import env from '../../env.json';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContenidoUsuariosAdmin = () => {

  const [users, setUsers] = useState([]);

  const listarUsuarios = async () => {
    try {
      const response = await axios.get(`${env.host}/usuarios/listar`);
      const data = response.data.map(el => {
        el.roles = el.roles.map(ele => ele.nombre).join(',');
        return el;
      });
      setUsers(data);
    } catch (e) {
      alert("No hay usuarios en el sistema");
    }
  };

  useEffect(() => {
    (async () => {
      await listarUsuarios();
    })();
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
                      id="button"
                      type="button"
                      className="btn btn-primary btn-block">
                      <Link to="/crear_usuario_admin">
                      Crear
                      </Link>
                    </button>
                    <input
                        className="form-control inputBuscar"
                        //value={busqueda}
                        placeholder="Busqueda por Nombre o Numero de Documento"
                        //onChange={handleChange}
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
        {users.map(instituciones => (
          <tr key={instituciones.id}>
            <td>{instituciones.unaPersona.nombre}</td>
            <td>{instituciones.unaPersona.apellido}</td>
            <td>{instituciones.roles}</td>
            <td>{instituciones.unaPersona.estado}</td>
            <td>
              <a className="link_menu" href="editar_usuario_admin">Editar </a>
               |
              <a className="link_menu" href="eliminar_usuario_admin"> Eliminar</a>
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
