import React, {useEffect, useState} from 'react';
import './navegacionAdmin.css'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { clearUser } from '../../redux/slice';
import axios from 'axios';
import  env from "../../env.json";

const NavegacionAdmin = () => {
    const fecha = new Date();
    const hora = fecha.toLocaleDateString();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch(); 
    const [ zonas, setZonas ] = useState([]);
    
    const obtenerZona= async () => {
        try {
          const response = await axios.get(`${env.host}/zona/listar`);
         const filtered = response.data.filter((elemento) => (
            elemento.id !== 6 && elemento.id !== 7)
         )
          setZonas(filtered);
          } catch (err) {
          console.log(err);
          }
        };


    const exit = () => {
        dispatch(clearUser());
        window.location.reload();
    }

    useEffect(() => {
        obtenerZona();
    },[] )
 

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
                            <img id='imgflecha' src="/img/flecha_abajo.png"  alt="" />
                        </div>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/cambiar_clave_admin">Cambiar Clave</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/cargar_datos_admin">Cargar Datos</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/usuarios_admin">Roles y Perfiles</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/huella_estudiante_nuevo_admin">Estudiante Nuevo</Link></li>
                        </ul>
                    </li>
                    <li id='item'>
                        <div className='menu_link'>
                            Contratista
                            <img id='imgflecha' src="/img/flecha_abajo.png" alt="" />
                        </div>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/crear_contratista_admin">Registro de Contratistas</Link></li>
                            <li id='boxli' className='boxli-sed'> SED <img id='imgflecha1' src="/img/flecha_abajo.png" alt="" />
                              
                               <ul id='desple2'>
                                 <li id='boxli2' className='boxli2-huila'> Huila <img id='imgflecha2' src='img/flecha_abajo.png' alt="" />
                                    <ul id='desple3'>
                                        {zonas.map( ({nombre_zona,id}) => (
                                            <li id='boxli3' key={id}><Link className='menu_link' to={`/buscar_contratista_admin?idZona=${id}`}>{nombre_zona}</Link></li>
                                        ))}
                                    </ul>
                                    
                                 </li>
                                 <li id='boxli2'><Link className='menu_link' to="/buscar_contratista_admin?idZona=6">Neiva</Link></li>
                                 <li id='boxli2'><Link className='menu_link' to="/buscar_contratista_admin?idZona=7">Pitalito</Link></li>
                                </ul> 
                             
                            </li>
                            
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
