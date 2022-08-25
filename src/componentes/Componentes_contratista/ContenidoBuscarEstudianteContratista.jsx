import './Contenido_Buscar_Estudiante_contratista.css'
import axios from "axios";
import { Link } from "react-router-dom";
import React,{ useEffect, useState } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux"
import env from "../../env.json"


 const ContenidoBuscarEstudianteContratista =() => {

    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const user = useSelector(state => state.user);

    const peticionGet = async () => {
       try{
         const response = await axios.get(`${env.host}/estudiante/contratista/${user.id}`)
            const filtered = await response.data.filter((element) => (
            element.grado.codigo !== 21 && element.grado.codigo !== 22 && element.grado.codigo !==23 && element.grado.codigo !== 24 && element.grado.codigo !== 25 && element.grado.codigo !== 26 && element.grado.codigo !== 99 )
            )
            console.log(filtered);
                setUsuarios(filtered);
                setTablaUsuarios(filtered);
            } catch (error) {
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
                || elemento.consecutivo.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.institucion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
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
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios &&
                            usuarios.map((estudiante) => (
                                <tr key={estudiante.idEstudiante}>
                                    <td>{
                                           (estudiante.idTipoDocumento && estudiante.idTipoDocumento.corto) &&
                                                estudiante.idTipoDocumento.corto
                                        }
                                    </td>
                                    <td>{estudiante.numeroDocumento}</td>
                                    <td>{estudiante.nombre1 + " " + estudiante.nombre2}</td>
                                    <td>{estudiante.apellido1 + " " + estudiante.apellido2}</td>
                                    <td>{estudiante.fechaNacimiento}</td>
                                    <td>{estudiante.institucion}</td>
                                    <td>{estudiante.consecutivo.nombre}</td>
                                    <td>{estudiante.grupo}</td>
                                    <td>{estudiante.anoInf}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContenidoBuscarEstudianteContratista;
