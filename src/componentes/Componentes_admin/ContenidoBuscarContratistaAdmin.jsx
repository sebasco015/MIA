import './Contenido_Buscar_Estudiante_admin.css';
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ContenidoBuscarContratistaAdmin = () => {

    //const [contratista, setContratista] = useState([]);
    //const [tablaContratista, setTablaContratista] = useState([]);
    //const [busqueda, setBusqueda] = useState("");

   /* const peticionGet = async () => {
        await axios.get("http://localhost:8080/api/beneficiario/listar")
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
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaContratista.filter((elemento) => {
            if (elemento.estado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.nombreZona.nombreZona.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.unaZona.zona.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.unNit.nit.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    }


    useEffect(() => {
        peticionGet();
    }, [])
*/
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
                        //value={busqueda}
                        placeholder="Busqueda por Nombre o Numero de Documento"
                        //onChange={handleChange}
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
                            <th scope="col">Fehca Suscripcion</th>
                            <th scope="col">Fehca Incio</th>
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
                        {/*usuarios &&
                            usuarios.map((contratista) => (
                                <tr key={contratista.unContratista.idContratista}>
                                    <td>{contratista.unContratista.unTipoDocumento.nombre}</td>
                                    <td>{contratista.unContratista.numeroDocumento}</td>
                                    <td>{contratista.unContratista.nombre1 + " " + estudiante.unEstudiante.nombre2}</td>
                                    <td>{contratista.unContratista.apellido1 + " " + estudiante.unEstudiante.apellido2}</td>
                                    <td>{contratista.unContratista.fechaNacimiento}</td>
                                    <td>{contratista.unContratista.unaInstitucion.nombre}</td>
                                    <td>{contratista.unContratista.unaSede.nombre}</td>
                                    <td>{contratista.unContratista.grado}</td>
                                    <td>{contratista.fechaActual}</td>
                                    <td>{contratista.tipoBeneficio.nombre}</td>
                                    <td>{contratista.estado}</td>
                                </tr>
                            ))*/}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContenidoBuscarContratistaAdmin;
