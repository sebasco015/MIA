import React, { Component } from 'react'
import './contenidoBeneficioAdmin.css'
import { Link } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const ContenidoBeneficioAdmin = () => {
  return (
    <div id='beneficio_div'>
      <div id='beneficio_divruta'>
        <img id="beneficio_iconos" src='/img/icono_inicio.png' alt='' />
        <Link id="beneficio_linkinicio" to="/InicioAdmin">Inicio/</Link>
        <img id="beneficio_iconos" src='/img/icono_estudiantes.png' alt='' />
        <label id='beneficio_textrutas'>Beneficio/</label>
        <label id='beneficio_textrutas'>Registro Beneficio</label>
      </div>
      <Form id="beneficio_form">
        <div>
          <label>Username:</label>
          <Input
          />
        </div>
        <div>
          <label>Email:</label>
          <Input
          />
        </div>
        <div>
          <label>Rol:</label>
          <Input
          />
        </div>
        <div>
          <label>Tipo Documento:</label>
          <Input
          />
        </div>
        <div>
          <label>Numero Documento:</label>
          <Input
          />
        </div>
        <div>
          <label>Telefono:</label>
          <Input
          />
        </div>
        <div>
          <label>Nombre:</label>
          <Input
          />
        </div>
        <div>
          <label>Apellido:</label>
          <Input
          />
        </div>
        <div>
          <label>Fecha Nacimiento:</label>
          <Input
            type="date"
          />
        </div>
        <div>
          <label>Lugar Nacimiento:</label>
          <Input
          />
        </div>
        <div>
          <label>Dirección:</label>
          <Input
          />
        </div>
        <div>
          <label>Barrio:</label>
          <Input
          />
        </div>
      </Form>
    </div>
  );
}

export default ContenidoBeneficioAdmin;
