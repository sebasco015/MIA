/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './Navegacion_rector.css'
import { Link } from "react-router-dom";


export default function Navegacion_rector() {

    let fecha = new Date();
    console.log(fecha.toLocaleDateString());
    const hora = fecha.toLocaleDateString();

    return (
        <div>
            <header id="headermenu_contratista">
                <header id="titulos_contratista">
                    <div id="circulos_contratista"><div id="circulo_contratista"> </div><div id="circulo_contratista"> </div><div id="circulo_contratista"> </div></div>
                    <label></label>
                    <div></div>
                </header>
                <div id="div_horas_contratista">
                    <div />
                    <div />
                    <div id="div_hora_contratista" >
                        <input id="navegacion_fecha_contratista" type="text" defaultValue={hora}></input>
                        <img id="dimagen_contratista" src="/img/icono_usuario.png" alt="" />
                        <label id="texto_admin_contratista">Rector</label>
                    </div>
                </div>
                <ul id="menu">
                    <div></div>
                    <li id='item' ><Link id='link_menu' to="/Inicio_rector">Inicio</Link></li>
                    <li id='item'><a href='#' className='menu_link'>Ayuda<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Sistema_rector">Sistema</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Administrador<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Cambiar_Clave_rector">Cambiar Clave</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Estudiantes<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Buscar_Estudiante_rector">Buscar Estudiante</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Reportes<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Generar_Reportes_rector">Generar Reportes</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Facturación<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'> <Link className='menu_link' to="/Facturacion_rector">Facturacion</Link></li>
                        </ul>
                    </li>
                </ul>
            </header>
        </div>
    )
}
