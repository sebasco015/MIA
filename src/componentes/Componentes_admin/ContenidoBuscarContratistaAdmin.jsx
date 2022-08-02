import './Contenido_Buscar_Estudiante_admin.css';
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import { faAdd, faSearch, faTrash, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import env from '../../env.json';


const ContenidoBuscarContratistaAdmin = () => {
    
    const [contratistas, setContratista] = useState([]);
    const [ otroSi, setOtroSi] = useState([]);
    const [tablaContratista, setTablaContratista] = useState([]);
    const [ tablaOtroSi, setTablaOtroSi] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [ seacrhParam ] = useSearchParams();
    console.log(useSearchParams());
    const navigate = useNavigate();


   const peticionGet = async () => {
        const idZona = seacrhParam.get(`idZona`);
        await axios.get(`${env.host}/contratista/zona/${idZona}`)
            .then(response => {
                setContratista(response.data);
                setTablaContratista(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    };

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaContratista.filter((elemento) => {
            if (elemento.nit.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.idZona.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.representanteLegal.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setContratista(resultadosBusqueda);
    }

const handleOtroSi = (nit) => () => {
    console.log(nit);
    axios.get(`${env.host}/otroSi/contratista/${nit}`)
    .then(response => {
        setOtroSi(response.data);
        setTablaOtroSi(response.data);
    }).catch(err => {
        console.log(err);
    })
} 

    useEffect(() => {
        peticionGet();
    }, [seacrhParam])

    return (
        <div id="buscar_div">
            <div id='buscar_divruta'>
                <img id="buscar_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="buscar_linkinicio" to="/Inicio">Inicio/</Link>
                <img id="buscar_iconos" src='/img/icono_estudiantes.png' alt='' />
                <label id='buscar_textrutas'>Contratista/</label>
                <label id='buscar_textrutas'>Buscar Contratista</label>
            </div>
            <div id="buscar_form">
                <div id="buscar_divinfomacion" className="containerInput">
                    <input
                        className="form-control inputBuscar"
                        value={busqueda}
                        placeholder="Busqueda por nit, zona y representanteLegal"
                        onChange={handleChange}
                    />
                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className="table-responsive">
                <table id="buscar_tabla" className="table tabvle-sm table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Zona</th>
                            <th scope="col">Nombre Zona</th>
                            <th scope="col">NIT</th>
                            <th scope="col">Representante Legal</th>
                            <th scope="col">Cedula</th>
                            <th scope="col">N° Contrato</th>
                            <th scope="col">Cant. Complemento</th>
                            <th scope="col">Costo Complemento</th>
                            <th scope="col">Cant. Almuerzo</th>
                            <th scope="col">Costo Almuerzo</th>
                            <th scope="col">Total Cant. Diarias</th>
                            <th scope="col">Dias Atenicion</th>
                            <th scope="col">Otro Si</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contratistas &&
                            contratistas.map((contratista) => (
                                <tr key={contratista.nit}>
                                    <td>{contratista.idZona.nombre_zona}</td>
                                    <td>{contratista.nombreZona}</td>
                                    <td>{contratista.nit}</td>
                                    <td>{contratista.representanteLegal}</td>
                                    <td>{contratista.numeroDocumento}</td>
                                    <td>{contratista.numeroContrato}</td>
                                    <td>{contratista.cantidadComplemento}</td>
                                    <td>{contratista.costoComplemento}</td>
                                    <td>{contratista.cantidadAlmuerzo}</td>
                                    <td>{contratista.costoAlmuerzo}</td>
                                    <td>{contratista.cantidadesDiarias}</td>
                                    <td> {contratista.diasAtender}</td>
                                    <td> 
                                    <button 
                                        className="btn btn-success btn-block"
                                        data-toggle="collapse"
                                        onClick={ handleOtroSi(contratista.nit)}><FontAwesomeIcon icon={faStreetView} /></button>
                                        {"  "}
                                        <button
                                        className="btn btn-primary btn-block"
                                        onClick={() => navigate("/otrosi_contratista_admin", {state:{nit:contratista.nit}})}><FontAwesomeIcon icon={faAdd} /></button>
                                    {"  "}
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => navigate("/eliminar_contratista_admin", {state:{id:contratista.id}})}><FontAwesomeIcon icon={faTrash} /></button>
                                    </td>                                    
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ContenidoBuscarContratistaAdmin;
