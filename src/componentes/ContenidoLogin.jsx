import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import axios from 'axios';

import {setUser} from "../redux/slice";
import {validateRol} from "../helpers/validateRoles";
import env from '../env.json';

import './contenidoLogin.css';
import '../pages/pages_admin/InicioAdmin';

const ContenidoLogin = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = { usernameOrEmail: usernameOrEmail, password: password };

      const res = await axios.post(`${env.host}/auth/iniciarSesion`, data);
      dispatch(setUser({
        tokeDeAcceso: res.data.tokeDeAcceso,
        tipoRol: res.data.unUsuario.roles[0].nombre,
        estado: res.data.unUsuario.unaPersona.estado,
        id: res.data.unUsuario.id,
        email: res.data.unUsuario.email,
        password: res.data.unUsuario.password,
        username: res.data.unUsuario.username
      }));
    } catch (err) {
      console.log(err);
      alert('Usuario o Contraseña Incorrectos')
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

  useEffect(() => {
    validateRol("", user.tokeDeAcceso, user.id, user.tipoRol, user.estado)
      .then(resp => { if (resp) navigate(resp) });
  }, [navigate, user]);

  return (
    <div id="login_back">
      <div>.</div>
      <div className="form-floating" id="login_card">
        <div id="login_div_bienvenido">
          <h1 className="text-center" id='login_tex1'>Bienvenido</h1>
          <h2 className="text-center" id='login_tex2'>Fundación Mía</h2>
          <h3 className="text-center" id='login_tex3'>Construyendo Futuro</h3>
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
              onChange={e => setUsernameOrEmail(e.target.value)}
              validations={[required]}
            />
          </div>
          <div className="form-group" id="login_passwordform">
            <label id="inicio_labels">Contraseña</label>
            <Input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Contraseña"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
              validations={[required]}
            />
            <span
              id="password-icon"
              className="material-icons"
              onClick={() => setShowPassword(!showPassword)}
            >visibility</span>
          </div>
          <div id="login_div_link">
            <Link id="login_link_res" to="/">Restablecer Contraseña</Link>
          </div>
          <div id="login_div_boton">
            <CheckButton className="btn btn-success" id="login_boton_ingresar">Inciar Sección
              <span className="material-icons">login</span>
            </CheckButton>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ContenidoLogin;
