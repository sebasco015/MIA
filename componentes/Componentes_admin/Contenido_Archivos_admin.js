import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Archivos_admin.css'

export default class Contenido_Archivos_admin extends React.Component {
    render() {
        return (
            <div id="archivos_div">
                <div id='archivos_divruta'>
                    <img id="archivos_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="archivos_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="archivos_iconos" src='/img/icono_ayuda.png' alt='' />
                    <label id='archivos_textrutas'>Ayuda/</label>
                    <label id='archivos_textrutas'>Archivos</label>
                </div>
                <div id='archivos_selector'>
                    <label id="archivos_tema">Tema :</label>
                    <select id='archivos_seleccionar' className="form-select">
                        <option >Selecione Un Formato</option>
                        <option download="FORMATO DE PLANILLA - 1.xlsx" href="./public/FORMATO_DE_PLANILLA - 1.xlsx" >Diccionario de Datos</option>
                        <option>Estrategia PAE</option>
                        <option>Formato Cargue</option>
                        <option>Formato Men Plantillas</option>
                        <option>Totales</option>
                        <option>Instructivos</option>
                        <option>Cargue Manual Usuario</option>
                        <option>Cargue Matricula</option>
                        <option>Cargue Anexo 13A</option>
                        <option>Ingreso Huella estudiante Nuevo</option>
                    </select>
                    {/*  <a href="../public/descargas/FORMATO_DE_PLANILLA-2.xls" download="FORMATO_DE_PLANILLA-2.xls">Download Text</a>
                */}</div>
            </div>
        )
    }
}
