import './Contenido_Buscar_Estudiante_admin.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ContenidoBuscarContratistaAdmin = () => {
    
    const [contratistas, setContratista] = useState([]);
    const [tablaContratista, setTablaContratista] = useState([]);
    const [busqueda, setBusqueda] = useState("");

  const navigate = useNavigate();


   const peticionGet = async () => {
        await axios.get("http://localhost:8080/api/contratista/listar")
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


    useEffect(() => {
        peticionGet();
    }, [])

    return (
        <div id="buscar_div">
            <div id='buscar_divruta'>
                <img id="buscar_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="buscar_linkinicio" to="/Inicio">Inicio/</Link>
                <img id="buscar_iconos" src='/img/icono_estudiantes.png' alt='' />
                <label id='buscar_textrutas'>Contratita/</label>
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
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contratistas &&
                            contratistas.map((contratista) => (
                                <tr key={contratista.nit}>
                                    <td>{contratista.idZona.nombre}</td>
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
                                    <td>{contratista.diasAtender}</td>
                                    <td> 
                                        <button
                                        className="btn btn-primary btn-block"
                                        onClick={() => navigate("/editar_contratista_admin", {state:{id:contratista.id}})}>Editar </button>
                                    {"  "}
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => navigate("/eliminar_contratista_admin", {state:{id:contratista.id}})}> Eliminar</button>
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
