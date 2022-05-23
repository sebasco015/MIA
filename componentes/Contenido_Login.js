import React, { useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import './Contenido_Login.css'
import '../pages/pages_admin/Inicio_admin'

const Contenido_Login = () =>  {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipoRol, setTipoRol] = useState('');
  const [tipoEstado, setTipoEstado] = useState('');

  /*useEffect(() => {
    if(localStorage.getItem('tokeDeAcceso')) {
      const localTipoRol = localStorage.getItem("tipoRol");
      const localTipoEstado = localStorage.getItem("estado");

      if (localTipoRol === "ROLE_ADMIN" && localTipoEstado === "A") {
        navigate('/Inicio_admin');
      }
      if (localTipoRol === "ROLE_CONTRATISTA" && localTipoEstado === "A") {
        navigate('/Inicio_contratista');
      }
      if (localTipoRol === "ROLE_RECTOR" && localTipoEstado === "A") {
        navigate('/Inicio_rector');
      }
      if (localTipoRol === "ROLE_COORDINADOR" && localTipoEstado === "A") {
        navigate('/Inicio_coordinador');
      }
      if (localTipoRol === "ROLE_PROFESOR" && localTipoEstado === "A") {
        navigate('/Inicio_coordinador');
      }
    }
  }, []);*/

  const handleSubmit = async e => {
    e.preventDefault();
    try {

    const data = {
      usernameOrEmail: usernameOrEmail,
      password: password
    };

    const res = await axios.post('http://localhost:8080/api/auth/iniciarSesion/', data)
      localStorage.setItem('tokeDeAcceso', res.data.tokeDeAcceso);
      localStorage.setItem('tipoRol', res.data.unUsuario.roles[0].nombre)
      localStorage.setItem('estado', res.data.unUsuario.unaPersona.estado)
      localStorage.setItem('id', res.data.unUsuario.id)
      localStorage.setItem('email', res.data.unUsuario.email)
      localStorage.setItem('password', res.data.unUsuario.password)
      localStorage.setItem('username', res.data.unUsuario.username)

      setTipoRol(res.data.unUsuario.roles[0].nombre)
      setTipoEstado(res.data.unUsuario.unaPersona.estado)
    } catch (err) {
      console.log(err);
      alert('Usuario o Contraseña Incorrectos')
    }
  };

  const render = () => {

    if (tipoRol === "ROLE_ADMIN" && tipoEstado === "A") {
      return <Navigate to={'/Inicio_admin'} />
    }
    if (tipoRol === "ROLE_CONTRATISTA" && tipoEstado === "A") {
      return <Navigate to={'/Inicio_contratista'} />
    }
    if (tipoRol === "ROLE_RECTOR" && tipoEstado === "A") {
      return <Navigate to={'/Inicio_rector'} />
    }
    if (tipoRol === "ROLE_COORDINADOR" && tipoEstado === "A") {
      return <Navigate to={'/Inicio_coordinador'} />
    }
    if (tipoRol === "ROLE_PROFESOR" && tipoEstado === "A") {
      return <Navigate to={'/Inicio_coordinador'} />
    }

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
      <div id="login_back" >
        <div >.</div>
        <div className="form-floating" id="login_card">
          <div id="login_div_bienvenido"  >
            <h1 className="text-center" id='login_tex1'>Bienvenido</h1>
            <h2 className="text-center" id='login_tex2'>Fundación Mía</h2>
            <h3 className="text-center" id='login_tex3'>Construyendo Futuro</h3>
          </div>
          <div id="login_divimg">
            <img id="login_img" src="/img/logo_mia.png" alt="" />
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
            <div className="form-group" id="login_passwordform" >
              <label id="inicio_labels">Contraseña</label>
              <Input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Contraseña"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
                validations={[required]}
              />
              <span id="password-icon"
                className="material-icons"
                onClick={() => setShowPassword(!showPassword)}
              >visibility</span>
            </div>
            <div id="login_div_link">
              <Link id="login_link_res" to="/">Restablecer Contraseña</Link>
            </div>
            <div id="login_div_boton">
              <CheckButton className="btn btn-success" id="login_boton_ingresar">Inciar Sección
                <span className="material-icons">
                  login
                </span></CheckButton>
            </div>
          </Form>
        </div>
      </div>
    );
  }

  return render();
}

export default Contenido_Login;