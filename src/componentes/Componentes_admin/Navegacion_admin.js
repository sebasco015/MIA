/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './Navegacion_admin.css'
import { Link } from "react-router-dom";


export default function Navegacion_admin() {

    let fecha = new Date();
    console.log(fecha.toLocaleDateString());
    const hora = fecha.toLocaleDateString();

    return (
        <div>
            <header id="headermenu">
                <header id="titulos">
                    <div id="circulos"><div id="circulo"> </div><div id="circulo"> </div><div id="circulo"> </div></div>
                    <label></label>
                    <div></div>
                </header>
                <div id="div_horas">
                    <div />
                    <div />
                    <div id="div_hora" >
                        <input id="navegacion_fecha" type="text" defaultValue={hora}></input>
                        <img id="dimagen" src="/img/icono_usuario.png" alt="" />
                        <label id="texto_admin">Admin</label>
                    </div>
                </div>
                <ul id="menu">
                    <li id='item' ><Link id='link_menu' to="/Inicio_admin">Inicio</Link></li>
                    <li id='item'><a href='#' className='menu_link'>Ayuda<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Sistema_admin">Sistema</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Archivos_admin">Archivos</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Administrador<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Cambiar_Clave_admin">Cambiar Clave</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Cargar_Datos_admin">Cargar Datos</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Roles_admin">Roles</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Usuarios_admin">Usuarios</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Huella_Estudiante_Nuevo_admin">Huella Estudiante Nuevo</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Beneficio<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Beneficio_admin">Registro de Beneficio</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Instituciones<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Instituciones_admin">Buscar Instituciones</Link></li>
                        </ul>
                    </li>
                    
                    <li id='item'><a href='#' className='menu_link'>Estudiantes<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Buscar_Estudiante_admin">Buscar Estudiante</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Reportes<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Generar_Reportes_admin">Generar Reportes</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Facturación<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'> <Link className='menu_link' to="/Facturacion_admin">Facturacion</Link></li>
                        </ul>
                    </li>
                </ul>
            </header>
        </div>
    )
}
