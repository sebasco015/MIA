import React from 'react'
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import axios from 'axios';
import { Modal, Button, } from 'react-bootstrap'

class Modales extends React.Component {

    state = {}
    handleEnviar = e => {
        e.preventDefault();
        const data = {
            id: this.state.id,
            username: this.username,
            email: this.email,
            password: this.password
        };
        axios.put('http://localhost:8080/api/usuarios/actualizar/1', data)
            .then(res => {
                console.log(res);
                console.log(data);
            })
            .catch(
                err => {
                    console.log(err);
                    console.log(data);
                    alert('Incorrecto');
                }
            )
    }

    constructor() {
        super()
        this.state = {
            id: 1
        }
    }

    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.handleModal()}>Abrir Modal</Button>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()} >
                    <Modal.Header closeButton>
                        Actualizar Contraseña, Usuario o Email
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleEnviar} ref={c => { this.form = c; }}>
                            <div>
                                <label>Username</label>
                                <Input
                                    onChange={e => this.username = e.target.value}
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <Input
                                    onChange={e => this.email = e.target.value}
                                />
                            </div>
                            <div>
                                <label>Contraseña</label>
                                <Input
                                    onChange={e => this.password = e.target.value}
                                />
                            </div>
                            <CheckButton ref={c => { this.checkBtn = c; }} >Actualizar</CheckButton>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.handleModal()} variant="danger" >Cancelar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default Modales;