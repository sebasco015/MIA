import React from 'react';
import './navegacionAdmin.css'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { clearUser } from '../../redux/slice';

const NavegacionAdmin = () => {
    const fecha = new Date();
    const hora = fecha.toLocaleDateString();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const exit = () => {
        dispatch(clearUser());
        window.location.reload();
    }

    return (
        <div>
            <header id="headermenu">
                <header id="titulos">
                    <div id="circulos"><div id="circulo"></div><div id="circulo"> </div><div id="circulo"> </div></div>
                    <label></label>
                </header>
                <div id="div_horas">
                    <div />
                    <div />
                    <div id="div_hora" >
                        <input id="navegacion_fecha" defaultValue={ hora } disabled />
                        <img id="dimagen" src="/img/icono_usuario.png" alt="" />   
                        <label id="texto_admin">{ user.username }</label>
                         <img id="imgflecha" onClick={exit} src='/img/logaut.png' />
                    </div>
                </div>
                <ul id="menu">
                    <li id='item'>
                        <Link id='link_menu' to="/inicio_admin">Inicio</Link>
                    </li>
                    <li id='item'>
                        <div className='menu_link'>
                            Ayuda
                            <img id='imgflecha' src="/img/flecha_abajo.png" alt="" />
                        </div>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/sistema_admin">Sistema</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/archivos_admin">Archivos</Link></li>
                        </ul>
                    </li>
                    <li id='item'>
                        <div className='menu_link'>
                            Administrador
                            <img id='imgflecha' src="/img/flecha_abajo.png" alt="" />
                        </div>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/cambiar_clave_admin">Cambiar Clave</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/cargar_datos_admin">Cargar Datos</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/usuarios_admin">Usuarios</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/crear_usuario_admin">Crear Usuarios</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/huella_estudiante_nuevo_admin">Huella Estudiante Nuevo</Link></li>
                        </ul>
                    </li>
                    <li id='item'>
                        <div className='menu_link'>
                            Contratista
                            <img id='imgflecha' src="/img/flecha_abajo.png" alt="" />
                        </div>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/crear_contratista_admin">Registro de Contratistas</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/buscar_contratista_admin">Contratistas</Link></li>
                        </ul>
                    </li>
                    <li id='item'>
                        <div className='menu_link'>
                            Instituciones
                            <img id='imgflecha' src="/img/flecha_abajo.png" alt="" />
                        </div>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Instituciones_admin">Buscar Instituciones</Link></li>
                        </ul>
                    </li>
                    
                    <li id='item'>
                        <div className='menu_link'>
                            Estudiantes
                            <img id='imgflecha' src="/img/flecha_abajo.png" alt="" />
                        </div>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/buscar_estudiante_admin">Buscar Estudiante</Link></li>
                        </ul>
                    </li>
                    <li id='item'>
                        <div className='menu_link'>
                            Reportes
                            <img id='imgflecha' src="/img/flecha_abajo.png" alt="" />
                        </div>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Generar_Reportes_admin">Generar Reportes</Link></li>
                        </ul>
                    </li>
                    <li id='item'>
                        <div className='menu_link'>
                            Facturación
                            <img id='imgflecha' src="/img/flecha_abajo.png" alt="" />
                        </div>
                        <ul id='desple'>
                            <li id='boxli'> <Link className='menu_link' to="/Facturacion_admin">Facturacion</Link></li>
                        </ul>
                    </li>
  
                </ul>
            </header>
        </div>
    )
}

export default NavegacionAdmin;
