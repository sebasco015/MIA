import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import env from '../env.json';

import './contenidocambiarclave.css'
import {clearUser} from "../redux/slice";

const ContenidoCambiarClave = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [confNewPassword, setConfNewPassword] = useState('');

  useEffect(() => {
    setId(user.id);
  }, [user]);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if(newPassword !== '' && currentPassword !== '' && confNewPassword !== ''){
        if(newPassword === currentPassword || confNewPassword === currentPassword)
          alert('La nueva contraseña no puede ser igual a la anterior');

        else if(newPassword !== confNewPassword) alert('Las contraseñas no coinciden');

        else {
          const data = { currentPassword, newPassword, confirmPassword: confNewPassword };
          await axios.put(`${env.host}/usuarios/actualizar/contrasena/${id}`, data);
          dispatch(clearUser());
          alert('Contraseña actualizada');
          window.location.reload();
        }
      } else alert('Todos los campos son requeridos');
    } catch(e) {
      const eJson = e.toJSON();
      if(eJson.status === 400) alert('La contraseña actual no es valida');
      else alert('Datos incorrectos');
    }
  };

  const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert" id="login_alerterror">
          ¡Este campo es obligatorio!
        </div>
      );
    }
  };

  return (
    <div id="container">
      <div id='clave_divruta'>
        <img id="clave_iconos" src='/img/icono_inicio.png' alt='' />
        <Link id="clave_linkinicio" to="/Inicio">Inicio/</Link>
        <img id="clave_iconos" src='/img/icono_administrador.png' alt='' />
        <label id='clave_rutas'>Administrador/</label>
        <label id='Clave_rutas'>Cambiar Clave</label>
      </div>
      <Form onSubmit={ handleSubmit } id="clave_form">
        <div id="clave_divinfomacion">
          <label htmlFor="exampleInputEmail1" id="clave_inputs">Contraseña Actual:*</label>
          <Input
            autoComplete="true"
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Clave Actual"
            onChange={ e => setCurrentPassword(e.target.value) }
            value={ currentPassword }
            validations={[required]}
          />
        </div>
        <div id="clave_divinfomacion">
          <label htmlFor="exampleInputEmail1" id="clave_inputs">Contraseña Nueva:*</label>
          <Input
            autoComplete="true"
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Clave Nueva"
            onChange={ e => setNewPassword(e.target.value) }
            value={ newPassword }
            validations={[required]}
          />
        </div>
        <div id="clave_divinfomacion">
          <label htmlFor="exampleInputEmail1" id="clave_inputs">Confirmar Contraseña Nueva:*</label>
          <Input
            autoComplete="true"
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Confirmar Clave Nueva"
            onChange={ e => setConfNewPassword(e.target.value) }
            value={ confNewPassword }
            validations={[required]}
          />
        </div>

        <div id="busc">
          <CheckButton
            type="submit"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >Actualizar Contraseña</CheckButton>
        </div>
      </Form>
    </div>
  );
}

export default ContenidoCambiarClave;
