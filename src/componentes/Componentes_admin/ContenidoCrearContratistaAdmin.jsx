import  React, { useEffect, useRef, useState} from 'react'
import './ContenidoCrearContratistaAdmin.css'
import { Link } from "react-router-dom";
import axios from "axios";
import  env from "../../env.json";


const ContenidoCrearContratistaAdmin = () => {
  const formRef = useRef();
  
  const [nit , setNit ] = useState('');
  const [ zonas, setZonas ] = useState([]);
  const [ cantidadDesayuno, setCantidadDesayuno ] = useState('')
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
  const [ costoDesayuno, setCostoDesayuno ] = useState('');
  const [ costoComida, setCostoComida ] = useState('');
  const [ cantidadComida, setCantidadComida ] = useState('');
  

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
            nit,
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
            costoDesayuno,
            costoComida,
            cantidadComida,
            cantidadDesayuno     
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
          await obtenerZona();
        } )();
      }, []);

  return (
    <div id='Crearcon_div'>
      <div id='Crearcon_divruta'>
        <img id="Crearcon_iconos" src='/img/icono_inicio.png' alt='' />
        <Link id="Crearcon_linkinicio" to="/inicio_admin">Inicio/</Link>
        <img id="Crearcon_iconos" src='/img/icono_reportes.png' alt='' />
        <label id='Crearcon_textrutas'>Contratista/</label>
        <label id='Crearcon_textrutas'>Registro Contratista</label>
      </div>
      <form id="datoscon" onSubmit={ handleSubmit} ref={formRef}>
        <div>
          <label>SED:*</label>
          <select
            className="form-select"
            aria-label='default select example'
            id="Crearcon_inputs"
            name="id_zona"
            onChange={e => parseElement(e.target)}>
                <option key='zona-1' value={null}>Seleccione una Secretaria* </option>
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
          <label>Nit:</label>
          <input
            type="number"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Numero de NIT:*"
            onChange={e => setNit(e.target.value)}
          />
        </div>
        <div>
          <label>Representante Legal:</label>
          <input
            type="text"
            className="form-control"
            id="Crearcon_inputs"
            placeholder="Representante legal:*"
            onChange={e => setRepresentanteLegal(e.target.value)}
            >
          </input>
        </div>
        <div>
          <label>Cedula:</label>
          <input
            type="number"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Numero de documento:*"
            onChange={e => setNumeroDocumento(e.target.value)}
          />
        </div>
        <div>
          <label>N° Contrato:</label>
          <input
            type="text"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Numero contrato:*"
            onChange={e => setNumeroContrato(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha fechaSuscripcion:*</label>
          <input
            type="date"
            id="Crearcon_inputs"
            className="form-control" 
            onChange={e => setFehcaSuscripcion(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha de Inicio:*</label>
          <input
            type="date"
            id="Crearcon_inputs"
            className="form-control"      
            onChange={e => setFechaInicio(e.target.value)}
          />
        </div>

        <div>
          <label>Cantidad C.AM - C.PM:</label>
          <input
            type="number"
            id="Crearcon_inputs"
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
            id="Crearcon_inputs"
            placeholder="Costo de Complemento:*"
            onChange={e => setCostoComplemento(e.target.value)}
            >                 
          </input>
        </div>

        <div>
          <label>Cantidad Desayuno:</label>
          <input
            type="text"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="cantidad Desayuno:*"
            onChange={e => setCantidadDesayuno(e.target.value)}
          />
        </div>
        <div>
          <label>Costo Desayuno:</label>
          <input
            type="text"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Costo Desayuno:*"
            onChange={e => setCostoDesayuno(e.target.value)}
          />
        </div>

        <div>
          <label>Cantidad Almuerzo:</label>
          <input
            type="text"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="cantidad Almuerzo:*"
            onChange={e => setCantidadAlmuerzo(e.target.value)}
          />
        </div>
        <div>
          <label>Costo Almuerzo:</label>
          <input
            type="text"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Costo Almuerzo:*"
            onChange={e => setCostoAlmuerzo(e.target.value)}
          />
        </div>

        <div>
          <label>Cantidad Comida:</label>
          <input
            type="text"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Cantidad Comida:*"
            onChange={e => setCantidadComida(e.target.value)}
          />
        </div>
        <div>
          <label>Costo Comida:</label>
          <input
            type="text"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Costo Comida:*"
            onChange={e => setCostoComida(e.target.value)}
          />
        </div>

        <div>
          <label>Total Cantidades Diarias:</label>
          <input
            type="number"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Cantidades Diarias:*"
            onChange={e => setCantidadesDiarias(e.target.value)}
          />
        </div>
        <div>
          <label>Dias Atender:</label>
          <input
            type="number"
            id="Crearcon_inputs"
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
