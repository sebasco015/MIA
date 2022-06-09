import React from "react";
import {useRoutes} from "react-router-dom";

import Login from "./pages/Login";

// Components Admin
import InicioAdmin from "./pages/pages_admin/InicioAdmin";
import SistemaAdmin from "./pages/pages_admin/SistemaAdmin";
import ArchivosAdmin from "./pages/pages_admin/ArchivosAdmin";
import CambiarClaveAdmin from './pages/pages_admin/CambiarClaveAdmin';
import CargarDatosAdmin from './pages/pages_admin/CargarDatosAdmin'


const LocalRouter = () => {
  return useRoutes([
    { path: "/", element: <Login/> },
    { path: "inicio_admin", element: <InicioAdmin /> },
    { path: '/sistema_admin', element: <SistemaAdmin /> },
    { path: '/archivos_admin', element: <ArchivosAdmin /> },
    { path: '/cambiar_clave_admin', element: <CambiarClaveAdmin /> },
    { path: '/cargar_datos_admin', element: <CargarDatosAdmin /> }
  ]);
};

export default LocalRouter;
