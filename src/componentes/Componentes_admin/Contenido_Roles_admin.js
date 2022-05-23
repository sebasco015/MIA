import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Roles_admin.css'

export default class Contenido_Roles_admin extends React.Component {
    render() {
        return (
            <div id="roles_div">
                <div id='roles_divruta'>
                    <img id="roles_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="roles_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="roles_iconos" src='/img/icono_administrador.png' alt='' />
                    <label id='roles_textrutas'>Administrador/</label>
                    <label id='roles_textrutas'>Roles</label>
                </div>
                <form id="roles_form">
                    <div className="form-group" id="clave_divinfomacion">
                        <label htmlFor="exampleInputEmail1" id="roles_inputstext">Nuevo Rol:*</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Nuevo Rol" />
                    </div>
                    <div className="form-group" id="clave_divinfomacion">
                        <label htmlFor="exampleInputPassword1" id="roles_inputstext">Mensaje:</label>
                        <input type="text" className="form-control" />
                    </div>
                </form>
                <div id="busc">
                    <button type="submit" className="btn btn-danger">Crear Rol</button>
                </div>
                <table id="roles_table" className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Mensaje</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Administrador del Sistema</td>
                            <td>x</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Rector</td>
                            <td>x</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Docente</td>
                            <td>x</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
