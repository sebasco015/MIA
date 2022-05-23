import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Generar_Reportes_rector.css'

export default class Contenido_Generar_Reportes_rector extends React.Component {
    render() {
        return (
            <div id="reportes_div">
                <div id='reportes_divruta'>
                    <img id="reportes_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="reportes_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="reportes_iconos" src='/img/icono_reportes.png' alt='' />
                    <label id='reportes_textrutas'>Reportes/</label>
                    <label id='reportes_textrutas'>Generar Reportes</label>
                </div>
                <div id="reportes_form">
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext">Fecha Inicial:*</label>
                        <input id="reportes_inputstext" className="date" type="date"></input>
                    </div>
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext" >Fecha Final:*</label>
                        <input id="reportes_inputstext" className="date" type="date"></input>
                    </div>
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext">Reporte Grupos Poblacionales:*</label>
                        <select className="form-select">
                            <option>Internos</option>
                            <option>Indigenas</option>
                            <option>Negritudes</option>
                            <option>Internos</option>
                            <option>Victimas Del Conflicto Armado</option>
                            <option>NEE(Población Necesidades Especiales)</option>
                            <option>Ninguna De Las Anteriores</option>
                        </select>
                    </div>
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext">Tipo Reporte:*</label>
                        <select className="form-select">
                            <option>Formato Men-Planilla</option>
                            <option>Zona(Rural o Urbana)</option>
                            <option>Municipio</option>
                            <option>Sede Educativa</option>
                            <option>Sexo(F o M)</option>
                            <option>Consolidado Mensual Planilla</option>
                        </select>
                    </div>
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext">Reporte Tipo Alimentario:*</label>
                        <select className="form-select">
                            <option>AM</option>
                            <option>PM</option>
                            <option>Almuerzo</option>
                            <option>Ración Industrial</option>
                            <option>Ración Transportada en Caliente</option>
                            <option>RPC(Ración Para Preparar En Casa)</option>
                            <option>Bono</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext">Reporte Por Jornada:*</label>
                        <select className="form-select">
                            <option>Completa</option>
                            <option>Mañana</option>
                            <option>Tarde</option>
                            <option>Única</option>
                            <option>Otra</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div id="iconos_ger">
                        <div>
                            <img id="ico_ger" src='/img/icono_pdf.png' alt='' />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">PDF</label>
                            </div>
                        </div>
                        <div>
                            <img id="ico_ger" src='/img/icono_excel.png' alt='' />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">Excel</label>
                            </div>
                        </div>
                        <div>
                            <img id="ico_ger" src='/img/icono_archivo_plano.png' alt='' />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">Archivo Plano</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="busc">
                    <button type="submit" className="btn btn-danger">Generar Reporte</button>
                </div>
            </div>
        )
    }
}
