/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './Navegacion_profesor.css'
import { Link } from "react-router-dom";


export default function Navegacion_profesor() {

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
                        <label id="texto_admin">Profesor</label>
                    </div>
                </div>
                <ul id="menu">
                    <div></div>
                    <div></div>
                    <li id='item' ><Link id='link_menu' to="/Inicio_profesor">Inicio</Link></li>
                    <li id='item'><a href='#' className='menu_link'>Ayuda<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Sistema_profesor">Sistema</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Administrador<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Cambiar_Clave_profesor">Cambiar Clave</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Huella_Estudiante_Nuevo_profesor">Huella Estudiante Nuevo</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Estudiantes<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Buscar_Estudiante_profesor">Buscar Estudiante</Link></li>
                        </ul>
                    </li>
                </ul>
            </header>
        </div>
    )
}
