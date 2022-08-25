import './ContenidoBuscarEstudianteProfesor.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { faSearch, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux"
import  env from "../../env.json";

const ContenidoBuscarEstudianteProfesor = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const user = useSelector(state => state.user);

    const navigate = useNavigate();

    const peticionGet = async () => {
        try{
            const response = await axios.get(`${env.host}/estudiante/profesor/${user.id}`);
            const filtered = response.data.filter((elemento) => (
                elemento.grado.codigo !== 21 && elemento.grado.codigo !== 22 && elemento.grado.codigo !== 23 && elemento.grado.codigo !== 24 && elemento.grado.codigo !== 25 && elemento.grado.codigo !== 26 && elemento.grado.codigo !== 99)
                )
                console.log(filtered);
                setUsuarios(filtered);
                setTablaUsuarios(filtered);
            } catch(error) {
                console.log(error);
            }
    };

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        let resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.grupo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.nombre1.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.apellido1.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.numeroDocumento.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    }


    useEffect(() => {
        peticionGet(user.id);
    }, [user])

    return (
        <div id="buscar_div">
            <div id='buscar_divruta'>
                <img id="buscar_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="buscar_linkinicio" to="/Inicio">Inicio/</Link>
                <img id="buscar_iconos" src='/img/icono_estudiantes.png' alt='' />
                <label id='buscar_textrutas'>Estudiantes/</label>
                <label id='buscar_textrutas'>Buscar Estudiantes</label>
            </div>
            <div id="buscar_form">
                <div id="buscar_divinfomacion" className="containerInput">
                    <input
                        className="form-control inputBuscar"
                        value={busqueda}
                        placeholder="Busqueda por Nombre o Numero de Documento"
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
                            <th scope="col">Tipo Documento</th>
                            <th scope="col">Numero Documento</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Fecha de Nacimiento</th>
                            <th scope="col">Institución</th>
                            <th scope="col">Sede</th>
                            <th scope="col">Grado</th>
                            <th scope="col">Fecha de Registro</th>
                            {/* <th scope="col">Tipo Beneficio</th>
                            <th scope="col">Estado Beneficio</th>
                            <th scope="col">Acciones</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios &&
                            usuarios.map((estudiante) => (
                                <tr key={estudiante.idEstudiante}>
                                    <td>{estudiante.idTipoDocumento.corto}</td>
                                    <td>{estudiante.numeroDocumento}</td>
                                    <td>{estudiante.nombre1 + " " + estudiante.nombre2}</td>
                                    <td>{estudiante.apellido1 + " " + estudiante.apellido2}</td>
                                    <td>{estudiante.fechaNacimiento}</td>
                                    <td>{estudiante.institucion}</td>
                                    <td>{estudiante.consecutivo.nombre}</td>
                                    <td>{estudiante.grupo}</td>
                                    <td>{estudiante.anoInf}</td>
                                    {/* <td>{estudiante.tipoBeneficio.nombre}</td>
                                    <td>{estudiante.estado}</td> */}
                                    {/* <td> 
                                        <button
                                        className="btn btn-primary btn-block"
                                        onClick={() => navigate("/editar_estudiante_admin", {state:{id:estudiante.unEstudiante.idEstudiante}})}><FontAwesomeIcon icon={faEdit} /> </button>
                                    {"  "}
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => navigate("/eliminar_estudidante_admin", {state:{id:estudiante.unEstudiante.idEstudiante}})}> <FontAwesomeIcon icon={faTrash} /></button>
                                    </td>    */}
                                    
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContenidoBuscarEstudianteProfesor;
