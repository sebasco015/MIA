import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Contenido_Inicio.css'
import { useNavigate } from 'react-router-dom'

const Contenido_Inicio = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('tokeDeAcceso')) {
            navigate('/');
        }
    }, []);

    return (
        <div id="inicio_div">
            <div id='inicio_divruta'>
                <img id="inicio_icono" src='/img/icono_inicio.png' alt='' />
                <label id='inicio_textrutas'>Inicio</label>
            </div>
            <h4 id='inicio_text_titulo' >Bienvenido al Sistema</h4>
            <Carousel id="inicio_carusel" >
                <Carousel.Item interval={4000}>
                    <img
                        id='img_carusel'
                        className="d-block w-100"
                        src='/img/img1.jpeg'
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        id='img_carusel'
                        className="d-block w-100"
                        src='/img/img2.jpeg'
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        id='img_carusel'
                        className="d-block w-100"
                        src='/img/img3.jpeg'
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Contenido_Inicio;