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
    { value: "Desayuno", label: "Desayuno", key:"RTA-2"},
    { value: "Cena", label: "Cena", key:"RTA-3"},
    { value: "complementoAmPm", label: "Complemento Am Pm", key:"RTA-4"},
    { value: "racionIndustiral", label: "Racion Industrial", key:"RTA-5"},
    { value: "rtc", label: "Ración Transportada en Caliente", key:"RTA-6"},
    { value: "RPC", label: "RPC(Ración para preparar en casa)", key:"RTA-7"},
    { value: "bono", label: "Bono", key:"RTA-8"}
];
const optionsJornada = [
    { value: "completa", label: "Completa", key:"RJ-1"},
    { value: "mañana", label: "Mañana", key:"RJ-2"},
    { value: "Tarde", label: "Tarde", key:"RJ-3"},
    { value: "unica", label: "Unica", key:"RJ-4"},
    { value: "otra", label: "Otra", key:"RJ-5"}
];

const optionsSexo = [
    { value: "M", label: "Masculino", key: "Se-1"},
    { value: "F", label: "Femenino", key: "Se-2"}
];

const ContenidoGenerarReportesAdmin = () => {

    const [municipio, setMunicipio] = useState([]);
    const [municipioData, setMunicipioData] = useState([]);
    const [institucion, setInstitucion] = useState([]);
    const [institucionData, setInstitucionData] = useState([]);
    const [sede, setSede] = useState([]);
    const [zonaData, setZonaData] = useState([]);
    const [zona, setZona] = useState([]);
    const mensual = useRef();
    const menPlanilla = useRef();
    const [selectedOption, setSelectedOption] = useState(null);


    const obtenerMunicipios = async () => {
        try {
            const response = await axios.get(`${env.host}/municipios/listar`)
            console.log(response.data);
            setMunicipioData(response.data.map( el => ({
                value: el.idMunicipio,
                label: el.nombre
            })))
            setMunicipio(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerInstituciones = async () => {
        try {
            const response = await axios.get(`${env.host}/institucion`);
            console.log(response.data);
            setInstitucionData(response.data.map( el => ({
                value: el.idSede,
                label: el.nombre,
                key: el.idSede
            })))
            setInstitucion(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const obtenerZona = async () => {
        try {
            const response = await axios.get(`${env.host}/zona/listar`);
            console.log(response.data);
            setZonaData( response.data.map(el => ({
                value: el.id,
                label: el.nombre,
                key: el.id
            })));
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
                <div id="reportes_divinfomacion">
                    <label id="reportes_inputstext">Fecha Inicial:*</label>
                    <input id="reportes_inputstext" className="date" type="date"></input>
                </div>
                <div id="reportes_divinfomacion">
                    <label id="reportes_inputs" >Fecha Final:*</label>
                    <input id="reportes_inputstext" className="date" type="date"></input>
                </div>
                <div id="reportes_divinfomacion">
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
                </div>

                <div id="reportes_divinfomacion_prueba">
                    <label id="reportes_inputstext">Tipo Reporte:*</label>
                    <a class=" link_menu" onClick={handleSubmit1}>Formato Men-Planilla</a>
                    <a class="link_menu" onClick={handleSubmit}>Consolidado Mensual Planilla</a>
                    <label id="label_checks">Selecccione Area:</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        isMulti
                        options={optionsArea}
                        onChange={setSelectedOption}
                        placeholder="Seleccione Area"
                        closeMenuOnSelect={false}
                    />
                    <label id="label_checks">Zona:*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        isMulti
                        options={zonaData}
                        onChange={setSelectedOption}
                        placeholder="Seleccione Zona"
                        closeMenuOnSelect={false}
                    />
                    <label id="label_checks">Municipio:*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        isMulti
                        options={municipioData}
                        onChange={setSelectedOption}
                        placeholder="Seleccione Municipio/s"
                        closeMenuOnSelect={false}
                    />

                    <label id="label_checks">Sede Educativa:*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        isMulti
                        options={institucionData}
                        onChange={setSelectedOption}
                        placeholder="Seleccione Sede/s"
                        closeMenuOnSelect={false}
                    />
                    <label id="label_checks">Sexo</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        isMulti
                        options={optionsSexo}
                        onChange={setSelectedOption}
                        placeholder="Seleccione Sexo/s"
                        closeMenuOnSelect={false}
                    />


                </div>
                <div id="reportes_divinfomacion">
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

                </div>
                <div id="reportes_divinfomacion">
                    <label id="reportes_inputstext">Reporte Por Jornada:*</label>
                    <Select
                        className="selectpicker"
                        defaultValue={selectedOption}
                        isMulti
                        options={optionsJornada}
                        onChange={setSelectedOption}
                        placeholder="Seleccione Jornada/s"
                        closeMenuOnSelect={false}
                    />

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
