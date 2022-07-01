import React, { useState} from 'react';
//import { useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import axios from 'axios';

import {setUser} from "../redux/slice";

import env from '../env.json';

import './contenidoLogin.css';
import '../pages/pages_admin/InicioAdmin';

const ContenidoRestaurarContrasena = () => {
  //const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = { username: username, email: email };

      const res = await axios.post(`${env.host}/auth/recuperarcontrase`, data);
      dispatch(setUser({
        email: res.data.unUsuario.email,
        username: res.data.unUsuario.username
      }));
    } catch (err) {
      console.log(err);
      alert('contraseña envida al correo')
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
    <div id="login_back">
      <div>.</div>
      <div className="form-floating" id="login_card">
        <div id="login_div_bienvenido">
          <h1 className="text-center" id='login_tex1'>Restablecer Contraseña</h1>
        </div>
        <div id="login_divimg">
          <img id="login_img" src="/img/logo_mia.png" alt=""/>
        </div>

        <Form onSubmit={handleSubmit} id="login_usform">
          <div className="form-group">
            <label id="inicio_labels">Usuario</label>
            <Input
              type="text"
              className="form-control"
              placeholder="Usuario"
              autoComplete="username"
              onChange={e => setUsername(e.target.value)}
              validations={[required]}
            />
          </div>
          <div className="form-group" id="login_passwordform">
            <label id="inicio_labels">Email</label>
            <Input
              type="text"
              className="form-control"
              placeholder="Email"
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
              validations={[required]}
            />   
          </div>
          <div id="login_div_boton">
            <CheckButton 
                className="btn btn-success" 
                id="login_boton_ingresar">
                    Restablecer contraseña
            </CheckButton>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ContenidoRestaurarContrasena;
