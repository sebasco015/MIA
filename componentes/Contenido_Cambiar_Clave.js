import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Contenido_Cambiar_Clave.css'
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import axios from 'axios';

import { Modal, Button, } from 'react-bootstrap'

export default class Contenido_Cambiar_Clave extends React.Component {
    ///////////////////////////////////Primera Peticion
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            usernameOrEmail: this.usernameOrEmail,
            password: this.password
        };
        axios.post('http://localhost:8080/api/usuarios/Verificacion', data)
            .then(res => {

                const id = localStorage.getItem('id', res.data.unUsuario.id)
                const username = localStorage.getItem('username', res.data.unUsuario.username)
                const email = localStorage.getItem('email', res.data.unUsuario.email)
                const password = localStorage.getItem('password', res.data.unUsuario.password)

                this.setState({
                    showModal: true,
                })

                console.log(id)
                console.log(username)
                console.log(email)
                console.log(password)
            })
            .catch(
                err => {
                    console.log(err);
                    alert('Usuario o Contraseña Incorrectos')
                })
    };
    ////////////////////////////////////
    
    handlePassword = e => {
        e.preventDefault();
        const datas = {
            id: this.id,
            username: this.username,
            email: this.email,
            password: this.setpassword
        };
        axios.put('http://localhost:8080/api/usuarios/actualizar/1', datas)
            .then(res => {
                console.log(datas)
                console.log(res)
                console.log(this.setState.setid)
            })
            .catch(
                err => {
                    console.log(err);
                    console.log(datas)
                    alert('Incorrecto')
                }
            )
    }

    constructor() {
        super()
        this.state = {
            showModal: false,
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password')
        }
    }

    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {

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
                <Form onSubmit={this.handleSubmit} id="clave_form" ref={c => { this.form = c; }} >
                    <div id="clave_divinfomacion">
                        <label htmlFor="exampleInputEmail1" id="clave_inputs">Usuario o Email:*</label>
                        <Input
                            autoComplete="true"
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Ingrese Usuario o Email"
                            onChange={e => this.usernameOrEmail = e.target.value}
                            validations={[required]}
                        />
                    </div>
                    <div id="clave_divinfomacion">
                        <label htmlFor="exampleInputEmail1" id="clave_inputs">Contraseña Actual:*</label>
                        <Input autoComplete="true"
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Clave Actual"
                            onChange={e => this.password = e.target.value}
                            validations={[required]}
                        />
                    </div>
                    <div id="clave_divinfomacion">
                        <label htmlFor="exampleInputEmail1" id="clave_inputs">Contraseña Nueva:*</label>
                        <Input autoComplete="true"
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Clave Nueva"
                            onChange={e => this.password = e.target.value}
                            validations={[required]}
                        />
                    </div>
                    <div id="clave_divinfomacion">
                        <label htmlFor="exampleInputEmail1" id="clave_inputs">Confirmar Contraseña Nueva:*</label>
                        <Input autoComplete="true"
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Confirmar Clave Nueva"
                            onChange={e => this.password = e.target.value}
                            validations={[required]}
                        />
                    </div>

                    <div id="busc">
                        <CheckButton type="submit" className="btn btn-primary" ref={c => { this.checkBtn = c; }} data-toggle="modal" data-target="#exampleModal"
                        >Actualizar Contraseña</CheckButton>
                    </div>
                    <div>
                        <Modal show={this.state.showModal} onHide={() => this.handleModal()} >
                            <Modal.Header closeButton>
                                Actualizar Contraseña, Usuario o Email
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={this.handlePassword} ref={c => { this.form = c; }}>
                                    <div>
                                        <label>Username</label>
                                        <Input
                                            ref={c => { this.id = c; }}
                                            value={this.state.username}
                                        />
                                    </div>
                                    <div>
                                        <label>Email</label>
                                        <Input
                                            onSubmit={e => this.email = e.target.value}
                                            value={this.state.email}
                                        />
                                    </div>
                                    <div>
                                        <label>Nueva Contraseña</label>
                                        <Input
                                            onChange={e => this.setpassword = e.target.value}
                                            value={this.state.password}
                                        />
                                    </div>
                                    <CheckButton ref={c => { this.check = c; }} >Actualizar</CheckButton>
                                    <Button onClick={() => this.handleModal()} variant="danger" >Cancelar</Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Form>
            </div>
        )
    }
}
