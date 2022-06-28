import  React, { useEffect, useRef, useState} from 'react'
import './ContenidoContratistaAdmin.css'
import { Link } from "react-router-dom";
import axios from "axios";
import  env from "../../env.json";


const ContenidoCrearContratistaAdmin = () => {
  const formRef = useRef();
  
  const [nit , setNit ] = useState([]);
  const [ zonas, setZonas ] = useState([]);
  const [ unNit , setUnNit ] = useState('');
  const [ representanteLegal, setRepresentanteLegal ] = useState('');
  const [ nombreZona, setNombreZona ] = useState('');
  const [ numeroDocumento, setNumeroDocumento ] = useState('');
  const [ numeroContrato, setNumeroContrato ] = useState('');
  const [ fechaSuscripcion, setFehcaSuscripcion ] = useState(''); 
  const [ fechaInicio, setFechaInicio ] = useState(''); 
  const [ cantidadComplemtento, setCanidadComplemtento ] = useState('');
  const [ costoComplemento, setCostoComplemento ] = useState(''); 
  const [ unaZona, setUnaZona ] = useState('');
  const [ cantidadAlmuerzo, setCantidadAlmuerzo ] = useState(''); 
  const [ costoAlmuerzo, setCostoAlmuerzo ] = useState('');
  const [ cantidadesDiarias, setCantidadesDiarias ] = useState('');
  const [ diasAtender, setDiasAtender ] = useState('');
 
  const obtenerNit= async () => {
    try {
      const response = await axios.get(`${env.host}/persona/listar`);	
      setNit(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const parseElement1 = async element => {
    const value = JSON.parse(element.value);
    if(element.name === "nit"){
      setUnNit({idPersona: value.idPersona, numeroDocumento: value.numeroDocumento});
    }
  };
  

    const obtenerZona= async () => {
      try {
        const response = await axios.get(`${env.host}/zona/listar`);
        setZonas(response.data);
        } catch (err) {
        console.log(err);
        }
      };

      const parseElement = async element => {
        const value = JSON.parse(element.value);
        if(element.name === "id_zona"){
          setUnaZona({id: value.id, nombre: value.nombre});
        }
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const data = {
            idZona: unaZona,
            nombreZona,
            nit: unNit.numeroDocumento,
            representanteLegal,
            numeroDocumento,
            numeroContrato,
            fechaSuscripcion,
            fechaInicio,
            cantidadComplemtento,
            costoComplemento,
            cantidadAlmuerzo,
            costoAlmuerzo,
            cantidadesDiarias,
            diasAtender,
            idPersona: unNit
          
          };

          await axios.post(`http://localhost:8080/api/contratista/guardar`, data);
          e.target.reset();
          alert("Contratista creado correctamente");
        } catch (e) {
          console.log(e);
          alert("Error al crear el contratista");
        }
      }

      useEffect(() => {
        (async () => {
          await obtenerNit();
          await obtenerZona();
        } )();
      }, []);

  return (
    <div id='contratista_div'>
      <div id='contratista_divruta'>
        <img id="contratista_iconos" src='/img/icono_inicio.png' alt='' />
        <Link id="contratista_linkinicio" to="/inicio_admin">Inicio/</Link>
        <img id="contratista_iconos" src='/img/icono_reportes.png' alt='' />
        <label id='contratista_textrutas'>Contratista/</label>
        <label id='contratista_textrutas'>Registro Contratista</label>
      </div>
      <form id="contratista_form" onSubmit={ handleSubmit} ref={formRef}>
        <div>
          <label>Zona:*</label>
          <select
            className="form-select"
            aria-label='default select example'
            id="huella_inputs"
            name="id_zona"
            onChange={e => parseElement(e.target)}>
                <option key='zona-1' value={null}>Seleccione una zona</option>
                {zonas && zonas.map(zona =>
              <option key={zona.id} value={JSON.stringify(zona)}>{zona.nombre}</option>
            )}
            </select>
        </div>
        <div>
          <label>Nombre Zona:</label>
          <input
            type="text"
            id="huella_inputs"
            className="form-control"
            placeholder="Nomre zona:*"
            onChange= {e => setNombreZona(e.target.value)}
          />
        </div>
        <div>
          <label>Nit:*</label>
          <select
            className="form-select"
            aria-label='default select example'
            id="huella_inputs"
            name="nit"
            onChange={e => parseElement1(e.target)}
          >
            <option>Seleccione un nit de contratista</option>
            {nit && nit.map(nits =>
              <option key={nits.idPersona} value={JSON.stringify(nits)}>{nits.numeroDocumento}</option>
            )}
          </select>      
        </div>
        <div>
          <label>Representante Legal:</label>
          <input
            type="text"
            className="form-control"
            id="huella_inputs"
            placeholder="Representante legal:*"
            onChange={e => setRepresentanteLegal(e.target.value)}
            >
          </input>
        </div>
        <div>
          <label>Cedula:</label>
          <input
            type="number"
            id="huella_inputs"
            className="form-control"
            placeholder="Numero de documento:*"
            onChange={e => setNumeroDocumento(e.target.value)}
          />
        </div>
        <div>
          <label>N° Contrato:</label>
          <input
            type="text"
            id="huella_inputs"
            className="form-control"
            placeholder="Numero contrato:*"
            onChange={e => setNumeroContrato(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha fechaSuscripcion:*</label>
          <input
            type="date"
            id="huella_inputs"
            className="form-control" 
            onChange={e => setFehcaSuscripcion(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha de Inicio:*</label>
          <input
            type="date"
            id="huella_inputs"
            className="form-control"      
            onChange={e => setFechaInicio(e.target.value)}
          />
        </div>
        <div>
          <label>Cantidad C.AM - C.PM:</label>
          <input
            type="number"
            id="huella_inputs"
            className="form-control"
            placeholder="Cantidad de Complemento:*"
            onChange={e => setCanidadComplemtento(e.target.value)}
          />
        </div>
        <div>
          <label>Costo de Complemento:</label>
           <input
            type="number"
            className="form-control" 
            id="huella_inputs"
            placeholder="Costo de Complemento:*"
            onChange={e => setCostoComplemento(e.target.value)}
            >                 
          </input>
        </div>
        <div>
          <label>Cantidad Almuerzo:</label>
          <input
            type="text"
            id="huella_inputs"
            className="form-control"
            placeholder="cantidad Almuerzo:*"
            onChange={e => setCantidadAlmuerzo(e.target.value)}
          />
        </div>
        <div>
          <label>Costo Almuerzo:</label>
          <input
            type="text"
            id="huella_inputs"
            className="form-control"
            placeholder="Costo Almuerzo:*"
            onChange={e => setCostoAlmuerzo(e.target.value)}
          />
        </div>
        <div>
          <label>Total Cantidades Diarias:</label>
          <input
            type="number"
            id="huella_inputs"
            className="form-control"
            placeholder="Cantidades Diarias:*"
            onChange={e => setCantidadesDiarias(e.target.value)}
          />
        </div>
        <div>
          <label>Dias Atender:</label>
          <input
            type="number"
            id="huella_inputs"
            className="form-control"
            placeholder="Dias Atender:*"
            onChange={e => setDiasAtender(e.target.value)}
          />
        </div>
        
        <div></div>
        <div></div>
        <div>
          <button
            id="lim"
            type="button"
            className="btn btn-danger"
            onClick={ () => formRef.current()}
          >Limpiar</button>
          <button 
            id="lim"
            type="submit"
            className="btn btn-primary btn-block">
              Guardar
            </button>
        </div>
      </form>
    </div>
  );
}

export default ContenidoCrearContratistaAdmin;
