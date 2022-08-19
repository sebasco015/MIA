import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import './ContenidoGenerarReportesAdmin.css'
import axios from "axios";
import Select from "react-select";
import env from '../../env.json';

const optionsArea = [
    { value: "rural", label: "rural" },
    { value: "urbana", label: "Urbana" }
];

const optionsRgp = [
    { value: "internos", label: "Internos", key: "RGP-1" },
    { value: "indigenas", label: "Indigenas" },
    { value: "afroamericanos", label: "Afroamericanos"},
    { value: "victimasCA", label: "Victimas del Conflicto Armando" },
    { value: "NEE", label: "NEE(Población Necesidades Especiales)" },
    { value: "Na", label: "Ninguna de las Anteriores"}
];

const optionsRta = [
    { value: "almuerzo", label: "Almuerzo", key:"RTA-1"},
    { value: "desayuno", label: "Desayuno", key:"RTA-2"},
    { value: "comoida", label: "Comida", key:"RTA-3"},
    { value: "complementoAmPm", label: "Complemento Am Pm", key:"RTA-4"},
    { value: "racionIndustiral", label: "Racion Industrial", key:"RTA-5"},
    { value: "rtc", label: "Ración Transportada en Caliente", key:"RTA-6"},
    { value: "RPC", label: "RPC(Ración para preparar en casa)", key:"RTA-7"},
    { value: "bono", label: "Bono", key:"RTA-8"}
];

const ContenidoGenerarReportesAdmin = () => {

    const [municipio, setMunicipio] = useState([]);
    const [institucion, setInstitucion] = useState([]);
    const [sede, setSede] = useState([]);
    const [secretaria, setSecretaria] = useState({});
    const [zona, setZona] = useState([]);
    const [jornada, setJornada] = useState([]);
    const [departamento, setDepartamento] = useState([]);
    const mensual = useRef();
    const menPlanilla = useRef();
    const [selectedOption, setSelectedOption] = useState(null);
    const [posision, setPosision] = useState(1);


    const obtenerMunicipios = async (id) => {
        try {
            const response = await axios.get(`${env.host}/municipios/zona/${id}`);
            console.log(response.data);
            const data = response.data.map(el => ({
                 value: el.codigo,
                 label: el.nombre,
                 key: el.codigo
            }))
            setMunicipio({...municipio, dataApi: data});
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerDepartamento = async () => {
    try{
        const response = await axios.get(`${env.host}/departamento/listar`)
        console.log(response.data);
        setDepartamento(response.data.map( el => ({
            value: el.codigo,
            label: el.nombre,
            key: el.codigo
        })))
        //setDepartamento(response.data);
    }catch(err) {
        console.log(err);
    }
};


    const obtenerInstituciones = async (id) => {
        try {
            const response = await axios.get(`${env.host}/institucion/municipio/${id}`);
            console.log(response.data);
            setInstitucion(response.data)
            const data = response.data.map(el => ({
                value: el.codDane,
                label: el.nombre,
                key: el.codDane
            }));
            setInstitucion({...institucion, dataApi: data});
        } catch (err) {
            console.log(err);
        }
    };

    const obtenerSecretaria = async (id) => {
        try {
            const response = await axios.get(`${env.host}/secretaria/departamento/${id}`);
            console.log(response.data);
           const data = response.data.map(el => ({
                value: el.id,
                label: el.nombreSecretaria,
                key: el.id
            }));
            setSecretaria({...secretaria, dataApi: data});
            
        } catch (err) {
            console.log(err);

        }
    };
    
    const obtenerZona = async (id) => {
        try {
            const response = await axios.get(`${env.host}/zona/secretaria/${id}`);
            console.log(response.data);
           const data = response.data.map(el => ({
                value: el.id,
                label: el.nombre_zona,
                key: el.id
            }));
            setZona({...zona, dataApi: data});
            
        } catch (err) {
            console.log(err);

        }
    };
    
    const obtenerSedes = async (id) => {
        try {
            const response = await axios.get(`${env.host}/sede/institucion/${id}`);
            console.log(response.data);
            setSede(response.data)
            const data = response.data.map(el => ({
                value: el.coonsecutivo,
                label: el.nombre,
                key: el.consecutivo
            }));
            setSede({...sede, dataApi: data});
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

    const obtenerJornada = async () => {
        try{
            const response = await axios.get(`${env.host}/jornada/listar`)
            console.log(response.data);
            setJornada(response.data.map( el => ({
                value: el.codigo,
                label: el.nombre,
                key: el.codigo
            })))
            //setDepartamento(response.data);
        }catch(err) {
            console.log(err);
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

    const valores = (current) => {
    if (posision <= current)
        setPosision(posision + 1); 
    };

    const changeDepartamento = async (e, current) => {
        setSelectedOption(e.value);
        valores(current);
        obtenerSecretaria(e.value);
        
    };

    const changeSecretaria = async (e, current) => {
        setSecretaria({...secretaria, dataSelected: e})
        valores(current);
        obtenerZona(e.value);   
    };

    const changeZona = async (e, current) => {
        setZona({...zona, dataSelected: e})
        valores(current);
        obtenerMunicipios(e.value);   
    };
    
    
    const changeMunicipio = async (e, current) => {
        setMunicipio({...municipio, dataSelected: e})
        valores(current);
        obtenerInstituciones(e.value);   
    };

    const changeInstitucion = async (e, current) => {
        setInstitucion({...institucion, dataSelected: e})
        valores(current);
        obtenerSedes(e.value);   
    };

    const changeSede = async (e, current) => {
        setSede({...sede, dataSelected: e})
        valores(current);
        // obtenerSedes(e.value);   
    };

    const handleSubmit1 = async e => {
        e.preventDefault();
        await getMenPlanilla();
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await getMensual();

    }
    const changeJornada = async (e) => {
        setSelectedOption(e.value);
    }

    useEffect(() => {
        (async () => {
            await obtenerDepartamento(); 
            await obtenerJornada();
        })()
    }, [])
    const radiobutton = [];

    const cambioradiobuton = (e) => {
        radiobutton.push(e.target.value)
        console.log(radiobutton)

    }

    return (
        <div id="reportes_div">
            <a ref={mensual} style={{ display: 'none' }}></a>
            <a ref={menPlanilla} style={{ display: 'none' }}></a>
            <div id='reportes_divruta'>
                <img id="reportes_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="reportes_linkinicio" to="/inicio_admin">Inicio/</Link>
                <img id="reportes_iconos" src='/img/icono_reportes.png' alt='' />
                <label id='reportes_textrutas'>Reportes/</label>
                <label id='reportes_textrutas'>Generar Reportes</label>
            </div>
            <div id="reportes_form" /*onSubmit={ handleSubmit}*/>
                <div id="reportes_divinfomacion_prueba">
                    <label id="reportes_inputstext">Fecha Inicial:*</label>
                    <input id="reportes_inputsdate" className="date" type="date"></input>
                    <br/>
                    <label id="reportes_inputstext" >Fecha Final:*</label>
                    <input id="reportes_inputsdate" className="date" type="date"></input>

                    <label id="reportes_inputstext">Reporte Grupos Poblacionales:</label>
                    <Select
                        id='select-input'
                        className="selecpicker"
                        defaultValue={selectedOption}
                        isMulti
                        options={optionsRgp}
                        onChange={setSelectedOption}
                        placeholder="Seleccione Grupos Poblacionales"
                        closeMenuOnSelect={false}
                    />
                    <label id="reportes_inputstext">Reporte Tipo Alimentario:*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        isMulti
                        options={optionsRta}
                        onChange={setSelectedOption}
                        placeholder="Seleccione tipo alimento"
                        closeMenuOnSelect={false}
                    />
                         <label id="reportes_inputstext">Reporte Por Jornada:*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        isMulti
                        options={jornada}
                        onChange={e => {changeJornada(e)}}
                        placeholder="Seleccione Jornada/s"
                        closeMenuOnSelect={false}
                    />


                </div>
                <div id="reportes_divinfomacion">
                </div>
                <div id="reportes_divinfomacion_prueba">
                    <label id="reportes_inputstext">Tipo Reporte:*</label>
                    <a class=" link_menu" onClick={handleSubmit1}>Formato Men-Planilla</a>
                    <a class="link_menu" onClick={handleSubmit}>Consolidado Mensual Planilla</a>
                   {posision>= 1 && (<div>
                    <label id="label_checks">Seleccione Departamento:</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        options={departamento}
                        onChange={e => {changeDepartamento(e, 1)}}
                        placeholder="Seleccione Departamento"
                        closeMenuOnSelect={true}
                    />
                    </div>)}
                    {posision>= 2 && (<div>
                    <label id="label_checks">SED(Secretaria Educacion Departamental):*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        options={secretaria.dataApi}
                        onChange={e => changeSecretaria(e, 2)}
                        placeholder="Seleccione Secretaria"
                        closeMenuOnSelect={true}
                    />
                    </div>)}

                    {posision>= 3 && (<div>
                    <label id="label_checks">Zona:*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        options={zona.dataApi}
                        onChange={e => changeZona(e, 3)}
                        placeholder="Seleccione Zona"
                        closeMenuOnSelect={true}
                    />
                    </div>)}
                    {posision>= 4 && (<div>
                    <label id="label_checks">Municipio:*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        options={municipio.dataApi}
                        onChange={e => changeMunicipio(e, 4)}
                        placeholder="Seleccione Municipio/s"
                        closeMenuOnSelect={true}
                    />
                    </div>)}
                    {posision>= 5 && (<div>
                    <label id="label_checks">Establecimiento Educativa:*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}   
                        options={institucion.dataApi}
                        onChange={e => changeInstitucion(e, 5)}
                        placeholder="Seleccione Institucion"
                        closeMenuOnSelect={true}
                    />
                    </div>)}
                    {posision>= 6 && (<div>
                    <label id="label_checks">Sede:*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        options={sede.dataApi}
                        onChange={e => changeSede(e, 6)}
                        placeholder="Seleccione sede"
                        closeMenuOnSelect={true}
                    />
                    </div>)}

                </div>
                <div id="reportes_divinfomacion" >    
                </div>
                <div id="reportes_divinfomacion" >     
                </div>
                <div id="reportes_divinfomacion" > 
                </div>
                <div id="reportes_divinfomacion" > 
                </div>
            </div>

            <div>
                <div id="iconos_ger">
                    <div>
                        <img id="ico_ger" src='/img/icono_pdf.png' alt='' />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="pdf" id="flexCheckDefault" onChange={cambioradiobuton} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">PDF</label>
                        </div>
                    </div>
                    <div>
                        <img id="ico_ger" src='/img/icono_excel.png' alt='' />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="excel" id="flexCheckDefault" onChange={cambioradiobuton} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Excel</label>
                        </div>
                    </div>
                    <div>
                        <img id="ico_ger" src='/img/icono_archivo_plano.png' alt='' />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="aplano" id="flexCheckDefault" onChange={cambioradiobuton} />
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
