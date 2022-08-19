import React, { useEffect, useRef, useState } from 'react'
import './ContenidoCrearContratistaAdmin.css'
import Select from "react-select"
import { Link } from "react-router-dom";
import axios from "axios";
import env from "../../env.json";


const ContenidoCrearContratistaAdmin = () => {
  const formRef = useRef();

  const [nit, setNit] = useState('');
  const [zona, setZona] = useState([])
  const [unaZona, setUnaZona] = useState('');
  const [secretaria, setSecretaria] = useState({});
  const [cantidadDesayuno, setCantidadDesayuno] = useState('')
  const [representanteLegal, setRepresentanteLegal] = useState('');
  const [nombreZona, setNombreZona] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [numeroContrato, setNumeroContrato] = useState('');
  const [fechaSuscripcion, setFehcaSuscripcion] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [cantidadComplemtentoAM, setCanidadComplemtentoAM] = useState('');
  const [costoComplementoAM, setCostoComplementoAM] = useState('');
  const [cantidadComplemtentoPM, setCanidadComplemtentoPM] = useState('');
  const [costoComplementoPM, setCostoComplementoPM] = useState('');
  const [cantidadAlmuerzo, setCantidadAlmuerzo] = useState('');
  const [costoAlmuerzo, setCostoAlmuerzo] = useState('');
  const [cantidadesDiarias, setCantidadesDiarias] = useState('');
  const [diasAtender, setDiasAtender] = useState('');
  const [costoDesayuno, setCostoDesayuno] = useState('');
  const [costoComida, setCostoComida] = useState('');
  const [cantidadComida, setCantidadComida] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [posision, setPosision] = useState(1);
  var d;

  const obtenerZona = async (id) => {
    try {
      const response = await axios.get(`${env.host}/zona/secretaria/${id}`);
      console.log(response.data);
      const data = response.data.map(el => ({
        value: el.id,
        label: el.nombre_zona,
        key: el.id
      }));
      setZona({ ...zona, dataApi: data });

    } catch (err) {
      console.log(err);

    }
  };


  const obtenerSecretaria = async () => {
    try {
      const response = await axios.get(`${env.host}/secretaria/listar`)
      console.log(response.data);
      setSecretaria(response.data.map(el => ({
        value: el.id,
        label: el.nombreSecretaria,
        key: el.id
      })));
      // setSecretaria(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const valores = (current) => {
    if (posision <= current)
      setPosision(posision + 1);
  };

  const changeSecretaria = async (e, current) => {
    setSelectedOption(e.value);
    valores(current);
    obtenerZona(e.value);

  };

  //   const changeZona = async (e, current) => {
  //     setZona({...zona, dataSelected: e})
  //     valores(current);

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        idZona: unaZona,
        nombreZona,
        nit,
        secretaria,
        representanteLegal,
        numeroDocumento,
        numeroContrato,
        fechaSuscripcion,
        fechaInicio,
        cantidadComplemtentoAM,
        costoComplementoAM,
        cantidadComplemtentoPM,
        costoComplementoPM,
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
      // await obtenerZona();
      await obtenerSecretaria();
    })();
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

      <form onSubmit={handleSubmit} ref={formRef} id="Crearcon_form">
        
        <div className="row">
          {posision>=1 && (
          <div className="col-md-3">
            <label for="sede">SED:*</label>
            <Select
              className="selecpicker"
              defaultValues={selectedOption}
              aria-label='default select example'
              id="sede"
              name="id_sed"
              options={secretaria}
              onChange={e => changeSecretaria(e, 1)}
              placeholder="Seleccione Secretaria*"
            // closeMenuOnSelect={false}
            />
          </div>)}
          {posision>=2 && (
          <div className="col-md-3">
            <label for="zona">Zona:*</label>
            <Select
              className="selecpicker"
              defaultValues={selectedOption}
              options={zona.dataApi}
              aria-label='default select example'
              id="zona"
              name="id_zona"
              placeholder="Seleccione Zona"
              onChange={e => setUnaZona(e, 2)}
            // closeMenuOnSelect={false}
            />
          </div>)}

          <div className="col-md-3">
            <label for="zonaName">Nombre Zona:</label>
            <input
              type="text"
              id="zonaName"
              className="form-control"
              placeholder="Nombre zona:*"
              onChange={e => setNombreZona(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label for="nit">Nit:</label>
            <input
              type="number"
              id="nit"
              className="form-control"
              placeholder="Numero de NIT:*"
              onChange={e => setNit(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label for="representanteLegal">Representante Legal:</label>
            <input
              type="text"
              className="form-control"
              id="representanteLegal"
              placeholder="Representante legal:*"
              onChange={e => setRepresentanteLegal(e.target.value)}
            >
            </input>
          </div>
          <div className="col-md-3">
            <label for="cedula">Cedula:</label>
            <input
              type="number"
              id="cedula"
              className="form-control"
              placeholder="Numero de documento:*"
              onChange={e => setNumeroDocumento(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label for="numeroContrato">N° Contrato:</label>
            <input
              type="text"
              id="numeroContrato"
              className="form-control"
              placeholder="Numero contrato:*"
              onChange={e => setNumeroContrato(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label for="fechaSuscripcion">Fecha Suscripcion:*</label>
            <input
              type="date"
              id="fechaSuscripcion"
              className="form-control"
              onChange={e => setFehcaSuscripcion(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div class="col-md-3">
            <label for="fechaInicio">Fecha de Inicio:*</label>
            <input
              type="date"
              id="fechaInicio"
              className="form-control"
              onChange={e => setFechaInicio(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label for="cantiAM">Cantidad Complemento AM :</label>
            <input
              type="number"
              id="cantiAM"
              className="form-control"
              placeholder="Cantidad de Complemento AM:*"
              onChange={e => setCanidadComplemtentoAM(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label for="costAM">Costo de Complemento AM:</label>
            <input
              type="number"
              className="form-control"
              id="costAM"
              placeholder="Costo de Complemento AM:*"
              onChange={e => setCostoComplementoAM(e.target.value)}
            >
            </input>
          </div>

          <div className="col-md-3">
            <label for="cantPM">Cantidad Complemento PM:</label>
            <input
              type="number"
              id="cantPM"
              className="form-control"
              placeholder="Cantidad de Complemento PM:*"
              onChange={e => setCanidadComplemtentoPM(e.target.value)}
            />
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-3">
            <label for="costPM">Costo de Complemento PM:</label>
            <input
              type="number"
              className="form-control"
              id="costPM"
              placeholder="Costo de Complemento PM:*"
              onChange={e => setCostoComplementoPM(e.target.value)}
            >
            </input>
          </div>

          <div className="col-md-3">
            <label for="cantDesayuno">Cantidad Desayuno:</label>
            <input
              type="text"
              id="cantDesayuno"
              className="form-control"
              placeholder="cantidad Desayuno:*"
              onChange={e => setCantidadDesayuno(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label for="costDesayuno">Costo Desayuno:</label>
            <input
              type="text"
              id="costDesayuno"
              className="form-control"
              placeholder="Costo Desayuno:*"
              onChange={e => setCostoDesayuno(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label for="cantAlmuerzo">Cantidad Almuerzo:</label>
            <input
              type="text"
              id="cantAlmuerzo"
              className="form-control"
              placeholder="cantidad Almuerzo:*"
              onChange={e => setCantidadAlmuerzo(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label for="costAlmuerzo">Costo Almuerzo:</label>
            <input
              type="text"
              id="costAlmuerzo"
              className="form-control"
              placeholder="Costo Almuerzo:*"
              onChange={e => setCostoAlmuerzo(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label for="cantComida">Cantidad Comida:</label>
            <input
              type="text"
              id="cantComida"
              className="form-control"
              placeholder="Cantidad Comida:*"
              onChange={e => setCantidadComida(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label for="costComida">Costo Comida:</label>
            <input
              type="text"
              id="costComida"
              className="form-control"
              placeholder="Costo Comida:*"
              onChange={e => setCostoComida(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label for="tCantDiarias">Total Cantidades Diarias:</label>
            <input
              type="number"
              id="tCantDiarias"
              className="form-control"
              placeholder="Cantidades Diarias:*"
              onChange={e => setCantidadesDiarias(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className='col-md-3'>
            <label for="diasAtender">Dias Atender:</label>
            <input
              type="number"
              id="diasAtender"
              className="form-control"
              placeholder="Dias Atender:*"
              onChange={e => setDiasAtender(e.target.value)}
            />
          </div>
        </div>
        <div className='col-md-12' id="Crearcon_btn">
            <button
              id="lim"
              type="button"
              className="btn btn-danger"
              onClick={() => formRef.current()}
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
