import React from "react";
import {useRoutes} from "react-router-dom";

import Login from "./pages/Login";

// Components Admin
import InicioAdmin from "./pages/pages_admin/InicioAdmin";
import SistemaAdmin from "./pages/pages_admin/SistemaAdmin";
import ArchivosAdmin from "./pages/pages_admin/ArchivosAdmin";
import CambiarClaveAdmin from './pages/pages_admin/CambiarClaveAdmin';
import CargarDatosAdmin from './pages/pages_admin/CargarDatosAdmin';
import UsuariosAdmin from './pages/pages_admin/UsuariosAdmin';
import HuellaEstudianteNuevoAdmin from './pages/pages_admin/HuellaEstudianteNuevoAdmin';
import BeneficioAdmin from './pages/pages_admin/BeneficioAdmin';
import BuscarEstudianteAdmin from "./pages/pages_admin/BuscarEstudianteAdmin";
import InstitucionesAdmin from "./pages/pages_admin/InstitucionesAdmin";
import GenerarReportesAdmin from "./pages/pages_admin/GenerarReportesAdmin";
import FacturacionAdmin from './pages/pages_admin/FacturacionAdmin';


const LocalRouter = () => {
  return useRoutes([
    { path: "/", element: <Login/> },
    { path: "inicio_admin", element: <InicioAdmin /> },
    { path: '/sistema_admin', element: <SistemaAdmin /> },
    { path: '/archivos_admin', element: <ArchivosAdmin /> },
    { path: '/cambiar_clave_admin', element: <CambiarClaveAdmin /> },
    { path: '/cargar_datos_admin', element: <CargarDatosAdmin /> },
    { path: '/usuarios_admin', element: <UsuariosAdmin /> },
    { path: 'huella_estudiante_nuevo_admin', element: <HuellaEstudianteNuevoAdmin /> },
    { path: '/beneficio_admin', element: <BeneficioAdmin /> },
    { path: 'Instituciones_admin', element: <InstitucionesAdmin /> },
    { path: '/buscar_estudiante_admin', element: <BuscarEstudianteAdmin /> },
    { path: '/Generar_Reportes_admin', element: <GenerarReportesAdmin /> },
    { path: '/Facturacion_admin', element: <FacturacionAdmin />}
  ]);
};

export default LocalRouter;
