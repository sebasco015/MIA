import React, { useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import env from "../../env.json";
import './Contenido_Facturacion_admin.css'



const ContenidoFacturacionAdmin = () => {
    const formRef = useRef();

    const [zona, setZona] = useState([]);
    const [ sede, setSede] = useState([]);
    const [ institucion, setInstitucion] = useState([]);
    const [unaZona, setUnaZona] = useState('');
    const [unaSede, setUnaSede] = useState('');
    const [unaInstitucion, setUnaInstitucion] = useState('');
    const [fechaInicial, setFechaInicial] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [numRacion, setNumRacion] = useState('');

    const obtenerZona = async () => {
        try {
          const response = await axios.get(`${env.host}/zona/listar`);
          setZona(response.data);
          } catch (err) {
          console.log(err);
          }
        };

        const obetenerSede = async () => {
            try {
                const response = await axios.get(`${env.host}/institucion`);
                setSede(response.data);    
            }catch (err) { 
                console.log(err);
            }
        };

        const obtenerInstitucion = async () => {
            try {
                const response = await axios.get(`${env.host}/institucion`);
                setInstitucion(response.data);
            }catch (err) {
                console.log(err);
            }
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const data = {
                    fechaInicial,
                    fechaFinal,
                    unaInstitucion: {'idInstitucion' : institucion},
                    unaSede: {'idSede' : sede},
                    unaZona: {'idZona' : zona},
                    numRacion,
                };
                await axios.post(`${env.host}/cuentacobro`,data)
                e.target.reset();
                alert("cuenta de cobro generada")
            } catch (e) {
                console.log(e);
                alert("erro al generar la cuenta de cobro");
            }
        }

         useEffect( () => {
            ( async () => {
                await obetenerSede();
                await obtenerZona();
                await obtenerInstitucion();
             } )();
        }, []);


        return (
            <div id="facturacion_div">
                <div id='facturacion_divruta'>
                    <img id="facturacion_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="facturacion_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="facturacion_iconos" src='/img/icono_facturacion.png' alt='' />
                    <label id='facturacion_textrutas'>Facturación/</label>
                    <label id='facturacion_textrutas'>Generar Factura</label>
                </div>
                <form onSubmit={handleSubmit} ref={formRef}>
                <div id='facturacion_form' >
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Fecha Inicial:</label>
                        <input id="facturacion_inputs" className="date" type="date"  onChange={e => setFechaInicial(e.target.value)}></input>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Fecha Final:</label>
                        <input id="facturacion_inputs" className="date" type="date"  onChange={e => setFechaFinal(e.target.value)}></input>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Institución Educativa:</label>
                        <select 
                        className="form-select"
                        id="facturacion_input"
                        aria-label="default select example"
                        onChange={e => setUnaInstitucion(e.target.value)}>
                            <option>Seleccione Institución Educativa*:</option>
                            {institucion && institucion.map(instituciones =>
                                <option key={instituciones.id} value={instituciones.id}>{instituciones.nombre}</option>
                                )}
                        </select>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Sede:</label>
                        <select 
                            className="form-select"
                            id = "facturacion_input"
                            aria-label="default select example"
                            onChange={e => setUnaSede(e.target.value)}>
                                
                            <option>Seleccione Sede*:</option>
                            {sede && sede.map(sedes =>
                                <option key={sedes.id} value={sedes.id}>{sedes.nombre}</option>
                                )}
                        </select>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Zona:</label>
                        <select 
                            className="form-select"
                            id="facturacion_input"
                            aria-label="default select example"
                            onChange={e => setUnaZona(e.target.value)}>
                            <option>Seleccione Zona*:</option>
                            {zona && zona.map(zone =>
                                <option key={zone.idZona} value={zone.idZona}>{zone.nombre}</option>
                                )}
                        </select>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" htmlFor="exampleInputEmail1" className="form-label">Numero Ración:</label>
                        <input id="facturacion_inputs" type="number" className="form-control" placeholder="Numero Ración" onChange={e => setNumRacion(e.target.value)}></input>
                    </div>
                </div>
                <div id="busc">
                    <button type="submit" className="btn btn-danger" >Buscar</button>
                </div>
                </form>
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
                        <tbody>{/*
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
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

export default ContenidoFacturacionAdmin;
