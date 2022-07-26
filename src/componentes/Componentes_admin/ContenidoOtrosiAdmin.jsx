import React, { useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import env from '../../env.json';

const ContenidoOtrosiAdmin = () => {
 const formRef = useRef();

 const [ cantidadAlmuerzo, setCantidadAlmuerzo ] = useState('');
 const [ cantidadBono, setCantidadBono] = useState('');
 const [ cantidadComida, setCantidadComida] = useState('');
 const [ cantidadComplementoAM, setCanidadComplemtentoAM ] = useState('');
 const [ cantidadComplementoPM, setCanidadComplemtentoPM ] = useState('');
 const [ cantidadDesayuno, setCantidadDesayuno] = useState('');
 const [ cantidadRacionCaliente, setCantidadRacionCaliente] = useState('');
 const [ cantidadRacionIndustrializada, setCantidadRacionIndustrializada] = useState('');
 const [ cantidadRacionRacionCasa, setCantidadRacionRacionCasa] = useState('');
 const [ costoAlmuerzo, setCostoAlmuerzo] = useState('');
 const [ costoComida, setCostoComida] = useState('');
 const [ costoComplementoAM, setCostoComplementoAM] = useState('');
 const [ costoComplementoPM, setCostoComplementoPM] = useState('');
 const [ costoDesayuno, setCostoDesayuno] = useState('');
 const [ costoRacionCaliente, setCostoRacionCaliente] = useState('');
 const [ costoRacionCasa, setCostoRacionCasa] = useState('');
 const [ costoRacionIndustrializada, setCostoRacionIndustrializada] = useState('');
 const [ costobono, setCostobono] = useState('');
 const [ fechaInicioOtro, setFechaInicioOtro] = useState('');
 const [ diasAtender, setDiasAtender] = useState('');
 const [ nit, setNit] = useState('');
 const idContratista = useState('');

 const navigate = useNavigate();
 const location = useLocation();

 useEffect (() =>{
    console.log(location);
       axios.get(`${env.host}/contratista/listar/` + location.state.nit).then((response) =>{ 
        setNit (response.data.nit);
        console.log(response.data);
       });
}, []);

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data = {
            cantidadComplementoAM,
            costoComplementoAM,
            cantidadComplementoPM,
            costoComplementoPM,
            cantidadAlmuerzo,
            costoAlmuerzo,
            cantidadDesayuno,
            costoDesayuno,
            cantidadComida,
            costoComida,
            cantidadBono,
            costobono,
            cantidadRacionCaliente,
            costoRacionCaliente,
            cantidadRacionIndustrializada,
            costoRacionIndustrializada,
            cantidadRacionRacionCasa,
            costoRacionCasa,
            fechaInicioOtro,
            diasAtender,
            idContratista: {'nit': nit}
        };
        await axios.post(`${env.host}/otroSi/guardar`, data);
        e.target.reset();
        alert("Otro si Guardado Correctamente")
        } catch (e) {
             console.log();
        }
        navigate(`/buscar_contratista_admin`)
    };


    return (
        <div id='Crearcon_div'>
      <div id='Crearcon_divruta'>
        <img id="Crearcon_iconos" src='/img/icono_inicio.png' alt='' />
        <Link id="Crearcon_linkinicio" to="/inicio_admin">Inicio/</Link>
        <img id="Crearcon_iconos" src='/img/icono_reportes.png' alt='' />
        <label id='Crearcon_textrutas'>Contratista/</label>
        <label id='Crearcon_textrutas'>Otro Si Contratista</label>
      </div>
      <form id="datoscon" onSubmit={ handleSubmit} ref={formRef}>
      <div>
          <label>Nit:</label>
          <input
            type="number"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Numero de NIT:*"
            value={nit}
            onChange={e => setNit(e.target.value)}
            disabled/>
        </div>

        <div>
          <label>Fecha Inicio Otro Si:*</label>
          <input
            type="date"
            id="Crearcon_inputs"
            className="form-control" 
            onChange={e => setFechaInicioOtro(e.target.value)}
          />
        </div>

        <div>
          <label>Cantidad Complemento AM:</label>
          <input
            type="number"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Cantidad de Complemento AM:*"
            onChange={e => setCanidadComplemtentoAM(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Costo de Complemento AM:</label>
           <input
            type="number"
            className="form-control" 
            id="Crearcon_inputs"
            placeholder="Costo de Complemento AM:*"
            onChange={e => setCostoComplementoAM(e.target.value)}
            required
            >                 
          </input>
        </div>

        <div>
          <label>Cantidad Complemento AM:</label>
          <input
            type="number"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Cantidad de Complemento AM:*"
            onChange={e => setCanidadComplemtentoAM(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Costo de Complemento AM:</label>
           <input
            type="number"
            className="form-control" 
            id="Crearcon_inputs"
            placeholder="Costo de Complemento AM:*"
            onChange={e => setCostoComplementoAM(e.target.value)}
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </div>

        <div>
          <label>Cantidad Bono:</label>
          <input
            type="text"
            className="form-control"
            id="Crearcon_inputs"
            placeholder="Cantidad Bono:*"
            onChange={e => setCantidadBono(e.target.value)}
            required
            >
          </input>
        </div>
        <div>
          <label>Costo del Bono:</label>
          <input
            type="number"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Costo del bono:*"
            onChange={e => setCostobono(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Cantidad Racion Transportada Caliente:</label>
          <input
            type="text"
            className="form-control"
            id="Crearcon_inputs"
            placeholder="Cantidades racion preparada en Caliente:*"
            onChange={e => setCantidadRacionCaliente(e.target.value)}
            required
            >
          </input>
        </div>
        <div>
          <label>Costo Racion Transportada Caliente:</label>
          <input
            type="number"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Costo de la Racion Caliente:*"
            onChange={e => setCostoRacionCaliente(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Cantidad Racion Industrializada:</label>
          <input
            type="text"
            className="form-control"
            id="Crearcon_inputs"
            placeholder="Cantidad raciones Industrializadas:*"
            onChange={e => setCantidadRacionIndustrializada(e.target.value)}
            required
            >
          </input>
        </div>
        <div>
          <label>Costo Racion Industrializada:</label>
          <input
            type="number"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="-Costo Racion Industrializada:*"
            onChange={e => setCostoRacionIndustrializada(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Cantidad racion Preparada en Casa:</label>
          <input
            type="text"
            className="form-control"
            id="Crearcon_inputs"
            placeholder="Cantidad Racion Casa:*"
            onChange={e => setCantidadRacionRacionCasa(e.target.value)}
            required
            >
          </input>
        </div>
        <div>
          <label>Costo Racion Casa:</label>
          <input
            type="number"
            id="Crearcon_inputs"
            className="form-control"
            placeholder="Costo de Racion en Casa:*"
            onChange={e => setCostoRacionCasa(e.target.value)}
            required
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
            required
          />
        </div>
        
        <div></div>
        <div></div>
        <div>
          <button
            id="lim"
            type="button"
            className="btn btn-danger"
            onClick={ () => navigate("/buscar_contratista_admin")}
          >Cancelar</button>
          <button 
            id="lim"
            type="submit"
            className="btn btn-primary btn-block">
              Guardar
            </button>
        </div>
      </form>
    </div>
    )

}

export default ContenidoOtrosiAdmin;