import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Sistema.css'

export default class Contenido_Sistema extends React.Component {
  render() {
    return (
      <div id="sistema_div">
        <div id='sistema_divruta'>
          <img id="sistema_iconos" src='/img/icono_inicio.png' alt='' />
          <Link id="sistema_linkinicio" to="/Inicio">Inicio/</Link>
          <img id="sistema_iconos" src='/img/icono_ayuda.png' alt='' />
          <label id='sistema_textrutas'>Ayuda/</label>
          <label id='sistema_textrutas'>Sistema</label>
        </div>
        <div id="sistema_parrafos">
          <p>
            El proceso de matrícula es el conjunto de políticas, procedimientos y actividades, que permiten organizar la continuidad de los alumnos antiguos y el ingreso de nuevos, en el Sistema de Educación Oficial del País.
          </p>
          <p>
            El sistema integrado de matrícula SIMAT es una herramienta que permite organizar y controlar el proceso de matrícula en todas sus etapas, así como tener una fuente de información confiable y disponible para la toma de dicisiones.
          </p>
          <p>
            SIMAT es un sistema de gestión de la matrícula de los estudientes de instiuciones oficiales que facilita la inscripción de alumnos nuevos, el registro y la actualización de los datos existentes de un alumno, la consulta de alumnos por la Institución, el traslado del alumno a otra Institución, así como la obtención de informes como apoyo para la toma de decisiones.
          </p>
          <p>
            Adicionalmente como apoyo a la matrícula se tiene el registro y consulta de las instituciones, la creación de Sedes, jornadas, grados y grupos y el manejo de las novedades relacionadas con estas, permitiendo la actualización de su información cuando sea necesario.
          </p>
          <p>
            Mediante la autorización de este proceso, se logra sistematizar, consolidar y analizar la información implicada en el mismo. Esto mejora los procesos de inscripción, asignación de cupos y matrícula y por ende el servicio a la comunidad.
          </p>
          <p>
            El Sistema Integrado de Matrícula SIMAT permite ademas efectuar un seguimiento completo y detallado al proceso de matrícula mediante el análisis de los informes que provee.
          </p>
        </div>
      </div>
    )
  }
}