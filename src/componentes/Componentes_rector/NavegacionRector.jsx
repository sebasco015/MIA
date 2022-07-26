/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './NavegacionRector.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from '../../redux/slice';

const NavegacionRector =() => {

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
            <header id="headermenu_rector">
                <header id="titulos_rector">
                    <div id="circulos_rector"><div id="circulo_rector"> </div><div id="circulo_rector"> </div><div id="circulo_rector"> </div></div>
                    <label></label>
                    <div></div>
                </header>
                <div id="div_horas_rector">
                    <div />
                    <div />
                    <div id="div_hora_rector" >
                        <input id="navegacion_fecha_rector" type="text" defaultValue={hora} disabled />
                        <img id="dimagen_rector" src="/img/icono_usuario.png" alt="" />
                        <label id="texto_admin_rector">{user.username}</label>
                        <img id="imgflecha" onClick={exit} src='/img/logaut.png' />
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

export default NavegacionRector;