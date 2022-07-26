import React from "react";
import {useRoutes} from "react-router-dom";

import Login from "./pages/Login";
import RecuperarContrasena from "./pages/RecuperarContrasena";


// Components Admin
import InicioAdmin from "./pages/pages_admin/InicioAdmin";
import SistemaAdmin from "./pages/pages_admin/SistemaAdmin";
import ArchivosAdmin from "./pages/pages_admin/ArchivosAdmin";
import CambiarClaveAdmin from './pages/pages_admin/CambiarClaveAdmin';
import CargarDatosAdmin from './pages/pages_admin/CargarDatosAdmin';
import UsuariosAdmin from './pages/pages_admin/UsuariosAdmin';
import HuellaEstudianteNuevoAdmin from './pages/pages_admin/HuellaEstudianteNuevoAdmin';
import CrearUsuarioAdmin from './pages/pages_admin/CrearUsuarioAdmin';
import BuscarContratistaAdmin from './pages/pages_admin/BuscarContratistaAdmin';
import CrearContratistaAdmin from "./pages/pages_admin/CrearContratistaAdmin";
import BuscarEstudianteAdmin from "./pages/pages_admin/BuscarEstudianteAdmin";
import InstitucionesAdmin from "./pages/pages_admin/InstitucionesAdmin";
import GenerarReportesAdmin from "./pages/pages_admin/GenerarReportesAdmin";
import FacturacionAdmin from './pages/pages_admin/FacturacionAdmin';
import ActualizarUsuarioAdmin from "./pages/pages_admin/ActualizarUsuarioAdmin";
import OtroSiContratistaAdmin from "./pages/pages_admin/OtroSiContratistaAdmin";

// Components Contratistas
import InicioContratista from "./pages/pages_contratista/InicioContratista";
import BuscarEstudianteContratista from "./pages/pages_contratista/BuscarEstudianteContratista";
import CambiarClaveContratista from "./pages/pages_contratista/CambiarClaveContratista";
import GenerarReportesContratista from "./pages/pages_contratista/GenerarReportesContratista";
import FacturacionContratista from "./pages/pages_contratista/FacturacionContratista";
import SistemaContratista from "./pages/pages_contratista/SistemaContratista";

// Components Coordinador
import InicioCoordinador from "./pages/pages_coordinador/InicioCoordinador";
import BuscarEstudianteCoordinador from "./pages/pages_coordinador/BuscarEstudianteCoordinador";
import HuellaEstudianteNuevoCoordinador from "./pages/pages_coordinador/HuellaEstudianteNuevoCoordinador";
import CambiarClaveCoordinador from "./pages/pages_coordinador/CambiarClaveCoordinador";
import SistemaCoordinador from "./pages/pages_coordinador/SistemaCoordinador";

// Components Profesores
import BuscarEstudianteProfesor from "./pages/pages_profesor/BuscarEstudianteProfesor";
import CambiarClaveProfesor from "./pages/pages_profesor/CambiarClaveProfesor";
import HuellaEstudianteNuevoProfesor from "./pages/pages_profesor/HuellaEstudianteNuevoProfesor";
import InicioProfesor from "./pages/pages_profesor/InicioProfesor";
import SistemaProfesor from "./pages/pages_profesor/SistemaProfesor";

// Components Rector
import BuscarEstudianteRector from "./pages/pages_rector/BuscarEstudianteRector";
import CambiarClaveRector from "./pages/pages_rector/CambiarClaveRector";
import FacturacionRector from "./pages/pages_rector/FacturacionRector";
import GenerarReportesRector from "./pages/pages_rector/GenerarReportesRector";
import InicioRector from "./pages/pages_rector/InicioRector";
import SistemaRector from "./pages/pages_rector/SistemaRector";


const LocalRouter = () => {
  return useRoutes([
    // Components Admin
    { path: "/", element: <Login/> },
    { path: "inicio_admin", element: <InicioAdmin /> },
    { path: '/sistema_admin', element: <SistemaAdmin /> },
    { path: '/archivos_admin', element: <ArchivosAdmin /> },
    { path: '/cambiar_clave_admin', element: <CambiarClaveAdmin /> },
    { path: '/cargar_datos_admin', element: <CargarDatosAdmin /> },
    { path: '/usuarios_admin', element: <UsuariosAdmin /> },
    { path: 'huella_estudiante_nuevo_admin', element: <HuellaEstudianteNuevoAdmin /> },
    { path: '/crear_usuario_admin', element: <CrearUsuarioAdmin /> },
    { path: '/buscar_contratista_admin', element: <BuscarContratistaAdmin /> },
    { path: '/otrosi_contratista_admin', element: <OtroSiContratistaAdmin /> },
    { path: '/crear_contratista_admin', element: <CrearContratistaAdmin /> },
    { path: 'Instituciones_admin', element: <InstitucionesAdmin /> },
    { path: '/buscar_estudiante_admin', element: <BuscarEstudianteAdmin /> },
    { path: '/Generar_Reportes_admin', element: <GenerarReportesAdmin /> },
    { path: '/Facturacion_admin', element: <FacturacionAdmin />},
    { path: '/restablecer_contrasena', element: <RecuperarContrasena />},
    { path: '/editar_usuario_admin', element: <ActualizarUsuarioAdmin />},

    //Components Contratista
    { path: 'inicio_contratista', element: <InicioContratista/>},
    { path: 'buscar_estudiante_contratista', element: <BuscarEstudianteContratista />},
    { path: 'cambiar_clave_contratista', element: <CambiarClaveContratista />},
    { path: 'generar_reportes_contratista', element: <GenerarReportesContratista />},
    { path: 'facturacion_contratista', element: <FacturacionContratista />},
    { path: 'sistema_contratista', element: <SistemaContratista />},

    //Components Coordinador
    { path: '/Inicio_coordinador', element: <InicioCoordinador />},
    { path: '/Sistema_coordinador', element: <SistemaCoordinador />},
    { path: '/Cambiar_Clave_coordinador', element: <CambiarClaveCoordinador />},
    { path: '/Huella_Estudiante_Nuevo_coordinador', element: <HuellaEstudianteNuevoCoordinador />},
    { path: '/Buscar_Estudiante_coordinador', element: <BuscarEstudianteCoordinador />},

    //Components Profesor
    { path: '/Inicio_profesor', element: <InicioProfesor />},
    { path: '/Sistema_profesor', element: <SistemaProfesor />},
    { path: '/Cambiar_Clave_profesor', element: <CambiarClaveProfesor />},
    { path: '/Huella_Estudiante_Nuevo_profesor', element: <HuellaEstudianteNuevoProfesor />},
    { path: '/Buscar_Estudiante_profesor', element: <BuscarEstudianteProfesor />},

    //Components Rector
    { path: '/Inicio_rector', element: <InicioRector />},
    { path: '/Sistema_rector', element: <SistemaRector />},
    { path: '/Cambiar_Clave_rector', element: <CambiarClaveRector />},
    { path: '/Buscar_Estudiante_rector', element: <BuscarEstudianteRector />},
    { path: '/Generar_Reportes_rector', element: <GenerarReportesRector />},
    { path: '/Facturacion_rector', element: <FacturacionRector />}

    
  ]);
};

export default LocalRouter;
