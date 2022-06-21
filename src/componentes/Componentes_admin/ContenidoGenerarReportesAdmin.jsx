import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './ContenidoGenerarReportesAdmin.css'
import axios from "axios";
import env from '../../env.json';

const ContenidoGenerarReportesAdmin = () => {
   
    const [municipio, setMunicipio] = useState([]);
    const [institucion, setInstitucion] = useState([]);
    const [sede, setSede] = useState([]);
    const [zona, setZona] = useState([]);
    
    

    const obtenerMunicipios = async () =>{
        try {
             const response = await axios.get(`${env.host}/municipios/listar`)
                setMunicipio(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerInstituciones = async () => {
        try {
          const response = await axios.get(`${env.host}/institucion`);
          setInstitucion(response.data);
        } catch (err) {
          console.log(err);
        }
      };
    
      const obtenerZona= async () => {
        try {
          const response = await axios.get(`${env.host}/zona/listar`);
          console.log(response.data);
          setZona(response.data);
          } catch (err) {
          console.log(err);
          }
        };

      const obtenerSedes = async () => {
        try {
          const response = await axios.get(`${env.host}/sede/listar`);
          setSede(response.data);
        } catch (err) {
          console.log(err)
        }
      };


    useEffect(() => {
        (async () => {
            await obtenerMunicipios();
            await obtenerInstituciones();
            await obtenerSedes();
            await obtenerZona();
        })()
    }, [])
   const radiobutton = [];

   const cambioradiobuton =(e) =>{
        radiobutton.push(e.target.value)
        console.log(radiobutton)
        
    }
   
        return (
            <div id="reportes_div">
                <div id='reportes_divruta'>
                    <img id="reportes_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="reportes_linkinicio" to="/inicio_admin">Inicio/</Link>
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
                    <div id="reportes_divinfomacion_prueba">
                        <label id="reportes_inputstext">Reporte Grupos Poblacionales:</label>
                        <label id="label_checks"><input type="checkbox" id="checks" value='internos' onChange={cambioradiobuton}/>Internos</label>
                        <label id="label_checks"><input type="checkbox" id="checks" value='indigenas' onChange={cambioradiobuton}/>Indigenas</label>
                        <label id="label_checks"><input type="checkbox" id="checks" value='afroamericanos'onChange={cambioradiobuton}/>Afroamericanos</label>
                        <label id="label_checks"><input type="checkbox" id="checks"value='victimasCA' onChange={cambioradiobuton} />Victimas Del Conflicto Armado</label>
                        <label id="label_checks"><input type="checkbox" id="checks" value='NEE' onChange={cambioradiobuton}/>NEE(Población Necesidades Especiales)</label>
                        <label id="label_checks"><input type="checkbox" id="checks"value='Na' onChange={cambioradiobuton}/>Ninguna De Las Anteriores</label>
                    </div>
                    <div id="reportes_divinfomacion_prueba">
                        <label id="reportes_inputstext">Tipo Reporte:*</label>
                        <label id="label_checks"><input type="checkbox" id="checks" value='formatoMenPlanilla' onChange={cambioradiobuton}/>Formato Men-Planilla</label>
                        <label id="label_checks"><input type="checkbox" id="checks" value='formatoMenPlanilla' onChange={cambioradiobuton}/>Consolidado Mensual Planilla</label>
                        <label id="label_checks">Selecccione Area:</label>
                        <select className="selectpicker" title="Selecccione Area" multiple>
                            <option key="A-1" value="rural">Rural</option>
                            <option key="A-2" value="urbana">Urbana</option>
                        </select>
                        <label id="label_checks">Zona</label>
                            <select className="selectpicker" title='Selecccione zona/s' multiple>
                                {zona && zona.map(zone =>
                                <option key={`Z-${zone.id}`} value={zone.id}>{zone.nombre}</option>
                                )}
                            </select>
                        <label id="label_checks">Municipio</label>
                        <select className="selectpicker" title="Selecccione Municipio/s" multiple>
                            { municipio && municipio.map(municipios =>
                            <option key={`M-${municipios.idMunicipio}`} value={municipios.idMunicipio}>{municipios.nombre}</option>
                            )}
                        </select>
                        
                        <label id="label_checks">Sede Educativa</label>
                        <select className="selectpicker" title="Selecccione Sede Educativa" multiple>
                            { institucion && institucion.map(instituciones =>
                                <option key={`S-${instituciones.idSede}`} value={instituciones.idInstitucion}>{instituciones.nombre}</option>
                            )}
                        </select>
                        <label id="label_checks"><input type="checkbox" id="checks" />Sexo(F o M)</label>
                        
                    </div>
                    <div id="reportes_divinfomacion_prueba">
                        <label id="reportes_inputstext">Reporte Tipo Alimentario:*</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Complemento Am Pm</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Almuerzo</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Ración Industrial</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Ración Transportada en Caliente</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />RPC(Ración Para Preparar En Casa)</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Bono</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Otro</label>
                    </div>
                    <div id="reportes_divinfomacion_prueba">
                        <label id="reportes_inputstext">Reporte Por Jornada:*</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Completa</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Mañana</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Tarde</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Única</label>
                        <label id="label_checks"><input type="checkbox" id="checks" />Otra</label>
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

export default ContenidoGenerarReportesAdmin;
