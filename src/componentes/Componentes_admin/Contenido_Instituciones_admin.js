import './Contenido_Instituciones_admin.css'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contenido_Instituciones_admin() {

    const [instituciones, setinstituciones] = useState([]);
    const [tablaInstituciones, settablaInstituciones] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const peticionGet = async () => {
        await axios.get("http://localhost:8080/api/institucion")
            .then(response => {
                setinstituciones(response.data);
                settablaInstituciones(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaInstituciones.filter((elemento) => {
            if (elemento.codDane.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setinstituciones(resultadosBusqueda);
    }


    useEffect(() => {
        peticionGet();
    }, [])

    return (
        <div id="instituciones_div" >
            <div id='instituciones_divruta'>
                <img id="instituciones_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="instituciones_linkinicio" to="/Inicio">Inicio/</Link>
                <img id="instituciones_iconos" src='/img/icono_instituciones.png' alt='' />
                <label id='instituciones_textrutas'>Buscar Instituciones/</label>
                <label id='instituciones_textrutas'>Instituciones</label>
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
            <div className="table-responsive" >
                <table id="instituciones_table" className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Código DANE</th>
                            <th scope="col">Nombre Institución</th>
                            <th scope="col">Rector Institución</th>
                            <th scope="col">Cantidad Sedes</th>
                            <th scope="col">Ver Institución</th>
                            <th scope="col">Ver Sedes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instituciones &&
                            instituciones.map((institucion) => (
                                <tr key={institucion.idInstitucion}>
                                    <td>{institucion.codDane}</td>
                                    <td>{institucion.nombre}</td>
                                    <td>{institucion.rector.unaPersona.nombre + " " + institucion.rector.unaPersona.apellido}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
