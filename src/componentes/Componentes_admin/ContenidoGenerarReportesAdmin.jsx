import React, { useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import './ContenidoGenerarReportesAdmin.css'
import axios from "axios";
import env from '../../env.json';

const ContenidoGenerarReportesAdmin = () => {
   
    const [municipio, setMunicipio] = useState([]);
    const [institucion, setInstitucion] = useState([]);
    const [sede, setSede] = useState([]);
    const [zona, setZona] = useState([]);
    const mensual = useRef();
    const menPlanilla = useRef();
    

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

      const getMensual = async () => {
        try {
            const resp = await axios({
              url: `http://localhost:8080/web/export/planilla`,
              method: 'GET',
              responseType: 'blob'
            });
            const fileURL = window.URL.createObjectURL(new Blob([resp.data]));
            mensual.current.href = fileURL;
            mensual.current.download = 'Consolidado planilla mensual.xlsx';
            mensual.current.click();
          } catch (e) {
              console.log(e);
              alert('error al descargar el informe');
          }
      };

      const getMenPlanilla = async () => {
        try {
            const resp1 = await axios({
              url: `http://localhost:8080/web/export/certificado`,
              method: 'GET',
              responseType: 'blob'
            });
            const fileURL1 = window.URL.createObjectURL(new Blob([resp1.data]));
            menPlanilla.current.href = fileURL1;
            menPlanilla.current.download = 'Formato Men-Planilla.xlsx';
            menPlanilla.current.click();
          } catch (e) {
              console.log(e);
              alert('error al descargar el informe');
          }
      };


      const handleSubmit1 = async e => {
        e.preventDefault();
        await getMenPlanilla();
      }

      const handleSubmit = async e => {
        e.preventDefault();
        await getMensual();
       
    }

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
                <a ref={mensual} style={{display: 'none'}}></a>
                <div id='reportes_divruta'>
                    <img id="reportes_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="reportes_linkinicio" to="/inicio_admin">Inicio/</Link>
                    <img id="reportes_iconos" src='/img/icono_reportes.png' alt='' />
                    <label id='reportes_textrutas'>Reportes/</label>
                    <label id='reportes_textrutas'>Generar Reportes</label>
                </div>
                <div id="reportes_form" /*onSubmit={ handleSubmit}*/>
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext">Fecha Inicial:*</label>
                        <input id="reportes_inputstext" className="date" type="date"></input>
                    </div>
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext" >Fecha Final:*</label>
                        <input id="reportes_inputstext" className="date" type="date"></input>
                    </div>
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext">Reporte Grupos Poblacionales:</label>
                           <select className="selectpicker" id="label_checks" title="Selecccione el Grupo" multiple>
                            <option key="RGP-1" value="internos">Internos</option>
                            <option key="RGP-2" value="indigenas">Indigenas</option>
                            <option key="RGP-3" value="afroamericanos">Afroamericanos</option>
                            <option key="RGP-4" value="victimasCA">Victimas del Conflicto Armado</option>
                            <option key="RGP-5" value="NEE">NEE(Población Necesidades Especiales)</option>
                            <option key="RGP-6" value="Na">Ninguna de las Anteriores</option>
                        </select>
                    </div>
                    
                    <div id="reportes_divinfomacion_prueba">
                        <label id="reportes_inputstext">Tipo Reporte:*</label>
                        <a class=" link_menu" onClick={handleSubmit1}>Formato Men-Planilla</a>
                        <a class="link_menu" onClick={handleSubmit}>Consolidado Mensual Planilla</a>
                        <label id="label_checks">Selecccione Area:</label>
                        <select className="selectpicker" title="Selecccione Area" multiple>
                            <option key="A-1" value="rural">Rural</option>
                            <option key="A-2" value="urbana">Urbana</option>
                        </select>
                        <label id="label_checks">Zona</label>
                            <select className="selectpicker" title='Selecccione zona/s' multiple>
                                {zona && zona.map(zone =>
                                <option key={`Z-${zone.idZona}`} value={zone.idZona}>{zone.nombre}</option>
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
                        <label id="label_checks">Sexo</label>
                        <select className="selectpicker" title="Seleccione Sexo" multiple>
                            <option key="Se-1" value="M">Masculino</option>
                            <select className="selectpicker" title="Seleccione sexo" multiple>
                            <option key="Se-2" value="F">Femenino</option>
                            <option key="Se-1" value="M">Masculino</option>
                            </select>
                        </select>

                        
                    </div>
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext">Reporte Tipo Alimentario:*</label>
                        <select className="selectpicker" title="Selecccion tipo Alimentario" multiple>
                            <option key="TA-1" value="almuerzo">Almuerzo</option>
                            <option key="TA-2" value="desayuno">Desayuno</option>
                            <option key="TA-3" value="cena">Cena</option>
                            <option key="TA-4" value="complementoAmPm">Complemento Am Pm</option>
                            <option key="TA-5" value="racionIndustiral">Racion Industiral</option>
                            <option key="TA-6" value="RTC">Ración Transportada en Caliente</option>
                            <option key="TA-7" value="RPC">RPC(Ración para preparar en casa)</option>
                            <option key="TA-8" value="bono">Bono</option>
                            <option key="TA-9" value="otro">Otro</option>
                        </select>
                     
                    </div>
                    <div id="reportes_divinfomacion">
                        <label id="reportes_inputstext">Reporte Por Jornada:*</label>
                        <select className="selectpicker" title="Selecccione jornada" multiple>
                            <option key="J-1" value="completa">Completa</option>
                            <option key="J-2" value="mañana">Mañana</option>
                            <option key="J-3" value="tarde">Tarde</option>
                            <option key="J-4" value="unica">Unica</option>
                            <option key="J-5" value="otra">Otra</option>

                        </select>
                        
                    </div>
                </div>
               
                <div>
                    <div id="iconos_ger">
                        <div>
                            <img id="ico_ger" src='/img/icono_pdf.png' alt='' />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="pdf" id="flexCheckDefault" onChange={cambioradiobuton}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">PDF</label>
                            </div>
                        </div>
                        <div>
                            <img id="ico_ger" src='/img/icono_excel.png' alt='' />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="excel" id="flexCheckDefault" onChange={cambioradiobuton}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">Excel</label>
                            </div>
                        </div>
                        <div>
                            <img id="ico_ger" src='/img/icono_archivo_plano.png' alt='' />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="aplano" id="flexCheckDefault" onChange={cambioradiobuton}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">Archivo Plano</label>
                            </div>
                        </div>
                    </div>
                </div>
                    <div id="busc">
                        <button id="lim" type="button" onClick={handleSubmit1} className="btn btn-danger">Generar Reporte</button>
                    </div>
               
               
            </div>
        )
    }

export default ContenidoGenerarReportesAdmin;
