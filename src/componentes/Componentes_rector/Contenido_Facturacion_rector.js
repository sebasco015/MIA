import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Facturacion_rector.css'

export default class Contenido_Facturacion_rector extends React.Component {
    render() {
        return (
            <div id="facturacion_div">
                <div id='facturacion_divruta'>
                    <img id="facturacion_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="facturacion_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="facturacion_iconos" src='/img/icono_facturacion.png' alt='' />
                    <label id='facturacion_textrutas'>Facturación/</label>
                    <label id='facturacion_textrutas'>Generar Factura</label>
                </div>
                <div id='facturacion_form'>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Fecha Inicial:</label>
                        <input id="facturacion_inputs" className="date" type="date" ></input>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Fecha Final:</label>
                        <input id="facturacion_inputs" className="date" type="date" ></input>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Institución Educativa:</label>
                        <select className="form-select">
                            <option>Institución Educativa*:</option>
                        </select>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Sede:</label>
                        <select className="form-select">
                            <option>Sede*:</option>
                        </select>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Zona:</label>
                        <select className="form-select">
                            <option>Zona*:</option>
                        </select>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Numero Ración:</label>
                        <input id="facturacion_inputs" type="text" className="form-control" placeholder="Numero Ración"></input>
                    </div>
                </div>
                <div id="busc">
                    <button type="submit" className="btn btn-danger">Buscar</button>
                </div>
                <div className="table-responsive">
                    <table id="facturacion_table" className="table tabvle-sm table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Zona</th>
                                <th scope="col">Almuerzo</th>
                                <th scope="col">A.M</th>
                                <th scope="col">P.M</th>
                                <th scope="col">$Valor Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Zona1</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            <tr>
                                <th scope="row">Zona2</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            <tr>
                                <th scope="row">Zona3</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            <tr>
                                <th scope="row">Zona4</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            <tr>
                                <th scope="row">Zona5</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            <tr>
                                <th scope="row">Indigenas</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
