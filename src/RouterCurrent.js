import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from './pages/Login'
//Imports Admin
import InicioAdmin from './pages/pages_admin/InicioAdmin'
import SistemaAdmin from './pages/pages_admin/SistemaAdmin'
import ArchivosAdmin from './pages/pages_admin/ArchivosAdmin'
import CambiarClaveAdmin from './pages/pages_admin/CambiarClaveAdmin'
import Cargar_Datos_admin from './pages/pages_admin/CargarDatosAdmin'
import Roles_admin from './pages/pages_admin/Roles_admin'
import Usuarios_admin from './pages/pages_admin/UsuariosAdmin'
import BeneficioAdmin from './pages/pages_admin/BeneficioAdmin'
import Huella_Estudiante_Nuevo_admin from './pages/pages_admin/HuellaEstudianteNuevoAdmin'
import Instituciones_admin from './pages/pages_admin/Instituciones_admin'
import BuscarEstudianteAdmin from './pages/pages_admin/BuscarEstudianteAdmin'
import Generar_Reportes_admin from './pages/pages_admin/Generar_Reportes_admin'
import Facturacion_admin from './pages/pages_admin/Facturacion_admin'
//Imports Contratista
import Buscar_Estudiante_contratista from './pages/pages_contratista/Buscar_Estudiante_contratista';
import Cambiar_Clave_contratista from './pages/pages_contratista/Cambiar_Clave_contratista';
import Facturacion_contratista from './pages/pages_contratista/Facturacion_contratista'
import Generar_Reportes_contratista from './pages/pages_contratista/Generar_Reportes_contratista'
import Inicio_contratista from './pages/pages_contratista/Inicio_contratista'
import Sistema_contratista from './pages/pages_contratista//Sistema_contratista'
//Imports Rector
import Buscar_Estudiante_rector from './pages/pages_rector/Buscar_Estudiante_rector';
import Cambiar_Clave_rector from './pages/pages_rector/Cambiar_Clave_rector';
import Facturacion_rector from './pages/pages_rector/Facturacion_rector'
import Generar_Reportes_rector from './pages/pages_rector/Generar_Reportes_rector'
import Inicio_rector from './pages/pages_rector/Inicio_contratista'
import Sistema_rector from './pages/pages_rector/Sistema_contratista'
//Imports Coordinador
import Buscar_Estudiante_coordinador from './pages/pages_coordinador/Buscar_Estudiante_coordinador';
import Cambiar_Clave_coordinador from './pages/pages_coordinador/Cambiar_Clave_coordinador';
import Huella_Estudiante_Nuevo_coordinador from './pages/pages_coordinador/Huella_Estudiante_Nuevo_coordinador'
import Inicio_coordinador from './pages/pages_coordinador/Inicio_coordinador'
import Sistema_coordinador from './pages/pages_coordinador/Sistema_coordinador'
//Imports Profesor
import Buscar_Estudiante_profesor from './pages/pages_profesor/Buscar_Estudiante_profesor';
import Cambiar_Clave_profesor from './pages/pages_profesor/Cambiar_Clave_profesor';
import Huella_Estudiante_Nuevo_profesor from './pages/pages_profesor/Huella_Estudiante_Nuevo_profesor'
import Inicio_profesor from './pages/pages_profesor/Inicio_profesor'
import Sistema_profesor from './pages/pages_profesor/Sistema_profesor'
const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={<Login />} />
          {/*Rutas Admin */}
          <Route exact path='/inicio_admin' element={<InicioAdmin />} />
          <Route exact path='/sistema_admin' element={<SistemaAdmin />} />
          <Route exact path='/archivos_admin' element={<ArchivosAdmin />} />
          <Route exact path='/cambiar_Clave_admin' element={<CambiarClaveAdmin />} />
          <Route exact path='/cargar_Datos_admin' element={<Cargar_Datos_admin />} />
          <Route exact path='/roles_admin' element={<Roles_admin />} />
          <Route exact path='/usuarios_admin' element={<Usuarios_admin />} />
          <Route exact path='/beneficio_admin' element={<BeneficioAdmin />} />
          <Route exact path='/huella_Estudiante_Nuevo_admin' element={<Huella_Estudiante_Nuevo_admin />} />
          <Route exact path='/instituciones_admin' element={<Instituciones_admin />} />
          <Route exact path='/buscar_Estudiante_admin' element={<BuscarEstudianteAdmin />} />
          <Route exact path='/generar_Reportes_admin' element={<Generar_Reportes_admin />} />
          <Route exact path='/facturacion_admin' element={<Facturacion_admin />} />
          {/*Rutas Contratista */}
          <Route exact path='/buscar_estudiante_contratista' element={<Buscar_Estudiante_contratista />} />
          <Route exact path='/cambiar_clave_contratista' element={<Cambiar_Clave_contratista />} />
          <Route exact path='/facturacion_contratista' element={<Facturacion_contratista />} />
          <Route exact path='/generar_reportes_contratista' element={<Generar_Reportes_contratista />} />
          <Route exact path='/inicio_contratista' element={<Inicio_contratista />} />
          <Route exact path='/sistema_contratista' element={<Sistema_contratista />} />
          {/*Rutas Rector */}
          <Route exact path='/buscar_estudiante_rector' element={<Buscar_Estudiante_rector />} />
          <Route exact path='/cambiar_clave_rector' element={<Cambiar_Clave_rector />} />
          <Route exact path='/facturacion_rector' element={<Facturacion_rector />} />
          <Route exact path='/generar_reportes_rector' element={<Generar_Reportes_rector />} />
          <Route exact path='/inicio_rector' element={<Inicio_rector />} />
          <Route exact path='/sistema_rector' element={<Sistema_rector />} />
          {/*Rutas Coordinador */}
          <Route exact path='/buscar_Estudiante_coordinador' element={<Buscar_Estudiante_coordinador />} />
          <Route exact path='/cambiar_Clave_coordinador' element={<Cambiar_Clave_coordinador />} />
          <Route exact path='/huella_Estudiante_Nuevo_coordinador' element={<Huella_Estudiante_Nuevo_coordinador />} />
          <Route exact path='/inicio_coordinador' element={<Inicio_coordinador />} />
          <Route exact path='/sistema_coordinador' element={<Sistema_coordinador />} />
          {/*Rutas Profesor */}
          <Route exact path='/buscar_Estudiante_profesor' element={<Buscar_Estudiante_profesor />} />
          <Route exact path='/cambiar_Clave_profesor' element={<Cambiar_Clave_profesor />} />
          <Route exact path='/huella_Estudiante_Nuevo_profesor' element={<Huella_Estudiante_Nuevo_profesor />} />
          <Route exact path='/inicio_profesor' element={<Inicio_profesor />} />
          <Route exact path='/sistema_profesor' element={<Sistema_profesor/>} />
        </Routes>
      </>
    </Router>
  );
}
export default App;

