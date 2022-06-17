-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-06-2022 a las 00:15:31
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_sga`
--
CREATE DATABASE IF NOT EXISTS `bd_sga` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_sga`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `beneficiario`
--

CREATE TABLE `beneficiario` (
  `id_beneficiaro` bigint(20) NOT NULL,
  `contador_beneficios` varchar(255) DEFAULT NULL,
  `ben_estado` varchar(50) DEFAULT NULL,
  `ben_fecha_actual` date NOT NULL,
  `ben_fecha_modificacion` date NOT NULL,
  `id_tipo_beneficio` bigint(20) DEFAULT NULL,
  `id_estudiante` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `beneficiario`
--

INSERT INTO `beneficiario` (`id_beneficiaro`, `contador_beneficios`, `ben_estado`, `ben_fecha_actual`, `ben_fecha_modificacion`, `id_tipo_beneficio`, `id_estudiante`) VALUES
(1, 'gdg', 'Activo', '2022-05-09', '2022-05-09', 2, 1),
(2, 'asd', 'Activo', '2022-06-10', '2022-06-10', 2, 12707);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contratista`
--

CREATE TABLE `contratista` (
  `nit` bigint(20) NOT NULL,
  `cantidad_almuerzo` int(11) NOT NULL,
  `cantidad_complemento` int(11) NOT NULL,
  `cantidades_diarias` int(11) NOT NULL,
  `costo_almuerzo` int(11) NOT NULL,
  `costo_complemento` int(11) NOT NULL,
  `dias_atender` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_suscripcion` date NOT NULL,
  `numero_contrato` int(11) NOT NULL,
  `numero_documento` int(11) NOT NULL,
  `representante_legal` varchar(30) NOT NULL,
  `id_zona` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contratista`
--

INSERT INTO `contratista` (`nit`, `cantidad_almuerzo`, `cantidad_complemento`, `cantidades_diarias`, `costo_almuerzo`, `costo_complemento`, `dias_atender`, `fecha_inicio`, `fecha_suscripcion`, `numero_contrato`, `numero_documento`, `representante_legal`, `id_zona`) VALUES
(1080, 3, 3, 3, 3, 3, 3, '2022-06-01', '2022-06-15', 3, 2323, 'harolo', 3),
(1223, 3, 3, 3, 3, 3, 3, '2022-06-01', '2022-06-15', 3, 2323, 'harolo', 3),
(78999, 3, 3, 3, 3, 3, 3, '2022-06-01', '2022-06-15', 3, 2323, 'harolo', 3),
(2382456, 3, 3, 3, 3, 3, 3, '2022-09-17', '2022-08-13', 3, 2323, 'liliana', 1),
(1000000000, 3, 3, 3, 3, 3, 3, '2022-06-01', '2022-06-15', 3, 2323, 'juan', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `id_deparmento` bigint(20) NOT NULL,
  `dep_codigo` int(11) DEFAULT NULL,
  `dep_nombre` varchar(255) DEFAULT NULL,
  `id_pais` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`id_deparmento`, `dep_codigo`, `dep_nombre`, `id_pais`) VALUES
(1, 1, 'Huila', 1),
(2, 2, 'Tolima', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `id_estudiante` bigint(20) NOT NULL,
  `est_acudiente` varchar(255) DEFAULT NULL,
  `est_apellido1` varchar(255) DEFAULT NULL,
  `est_apellido2` varchar(255) DEFAULT NULL,
  `est_direccion_recidencia` varchar(255) DEFAULT NULL,
  `reco_facial` varchar(255) DEFAULT NULL,
  `fecha_creacio` date NOT NULL,
  `est_fecha_nacimiento` varchar(255) DEFAULT NULL,
  `est_genero` varchar(255) DEFAULT NULL,
  `est_grado` varchar(255) DEFAULT NULL,
  `reco_huella` varchar(255) DEFAULT NULL,
  `est_municipio_recidencia` varchar(255) DEFAULT NULL,
  `est_nacimiento_departamento` varchar(255) DEFAULT NULL,
  `est_nacimiento_municipio` varchar(255) DEFAULT NULL,
  `est_nombre1` varchar(255) DEFAULT NULL,
  `est_nombre2` varchar(255) DEFAULT NULL,
  `est_numero_documento` bigint(20) DEFAULT NULL,
  `est_telefono` varchar(255) DEFAULT NULL,
  `est_telefono_acudiente` varchar(255) DEFAULT NULL,
  `id_director` bigint(20) DEFAULT NULL,
  `id_pais` bigint(20) DEFAULT NULL,
  `id_municipio` bigint(20) DEFAULT NULL,
  `id_tipo_documento` int(11) DEFAULT NULL,
  `id_tipo_discapacidad` bigint(20) DEFAULT NULL,
  `id_etnia` bigint(20) DEFAULT NULL,
  `id_institucion` bigint(20) DEFAULT NULL,
  `id_jornada` bigint(20) DEFAULT NULL,
  `id_sede` bigint(20) DEFAULT NULL,
  `id_beneficio` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`id_estudiante`, `est_acudiente`, `est_apellido1`, `est_apellido2`, `est_direccion_recidencia`, `reco_facial`, `fecha_creacio`, `est_fecha_nacimiento`, `est_genero`, `est_grado`, `reco_huella`, `est_municipio_recidencia`, `est_nacimiento_departamento`, `est_nacimiento_municipio`, `est_nombre1`, `est_nombre2`, `est_numero_documento`, `est_telefono`, `est_telefono_acudiente`, `id_director`, `id_pais`, `id_municipio`, `id_tipo_documento`, `id_tipo_discapacidad`, `id_etnia`, `id_institucion`, `id_jornada`, `id_sede`, `id_beneficio`) VALUES
(1, 'carmelina', 'perez', 'perez', 'calle 45', NULL, '2022-05-09', '12-03-2001', 'Masculino', 'Séptimo', NULL, 'Neiva', 'Huila', 'Neiva', 'Camilo', 'Alfredo', 105278578278, '32157856785', '32832784287', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(12707, 'khgj', 'jhg', 'jgj', 'jhg', NULL, '2022-06-10', NULL, NULL, 'Octavo', NULL, 'Neiva', 'Huila', 'Neiva', 'Andres', 'santiago', 25532342, '7643654', '5435466546', 3, 1, 1, 1, 1, 1, 1, 1, 1, 2),
(12709, 'dsdsad', 'conde ', 'bastidas', 'hfdgdf', NULL, '2022-06-13', 'hfdgfdg', 'M', 'octavo', NULL, 'ALGECIRAS', 'Huila', 'AGRADO', 'andres', 'fernando', 124214, '654654', '754654', 3, 1, 132, 2, 1, 1, 1, 1, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etnia`
--

CREATE TABLE `etnia` (
  `id_etnia` bigint(20) NOT NULL,
  `et_codigo` bigint(20) DEFAULT NULL,
  `et_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `etnia`
--

INSERT INTO `etnia` (`id_etnia`, `et_codigo`, `et_nombre`) VALUES
(1, 1, 'Ninguna'),
(2, 2, 'Afro'),
(3, 3, 'Indigena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facial`
--

CREATE TABLE `facial` (
  `id_facial` bigint(20) NOT NULL,
  `img_facial` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `huella`
--

CREATE TABLE `huella` (
  `id` bigint(20) NOT NULL,
  `huella` longblob DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `institucion`
--

CREATE TABLE `institucion` (
  `id_institucion` bigint(20) NOT NULL,
  `ins_cod_dane` bigint(20) DEFAULT NULL,
  `ins_estado` varchar(50) DEFAULT NULL,
  `ins_fecha_creacion` varchar(50) DEFAULT NULL,
  `ins_fecha_modificacion` varchar(50) DEFAULT NULL,
  `ins_naturaleza` varchar(50) DEFAULT NULL,
  `ins_nombre` varchar(200) DEFAULT NULL,
  `id_departamento` bigint(20) DEFAULT NULL,
  `ins_rector` bigint(20) DEFAULT NULL,
  `id_municipio` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `institucion`
--

INSERT INTO `institucion` (`id_institucion`, `ins_cod_dane`, `ins_estado`, `ins_fecha_creacion`, `ins_fecha_modificacion`, `ins_naturaleza`, `ins_nombre`, `id_departamento`, `ins_rector`, `id_municipio`) VALUES
(1, 2159465, 'Activofsdf', '12-03-2000', '12-03-2000', 'La Esperanza', 'I.E LA ESPARANZA', 1, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jornada`
--

CREATE TABLE `jornada` (
  `id_jornada` bigint(20) NOT NULL,
  `jor_codigo` bigint(20) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `jornada`
--

INSERT INTO `jornada` (`id_jornada`, `jor_codigo`, `nombre`) VALUES
(1, 1, 'Mañana'),
(2, 2, 'Tarde'),
(3, 3, 'Continua');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `id_municipio` bigint(20) NOT NULL,
  `mun_codigo` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `id_departamento` bigint(20) DEFAULT NULL,
  `id_zona` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`id_municipio`, `mun_codigo`, `nombre`, `id_departamento`, `id_zona`) VALUES
(1, 1, 'NEIVA', 1, 1),
(6, 2, 'ACEVEDO', 1, 2),
(13, 3, 'AGRADO', 1, 2),
(16, 4, 'AIPE', 1, 5),
(20, 37, 'ALGECIRAS', 1, 3),
(26, 5, 'ALTAMIRA', 1, 1),
(78, 6, 'BARAYA', 1, 5),
(132, 7, 'CAMPOALEGRE', 1, 5),
(206, 8, 'COLOMBIA', 1, 5),
(244, 9, 'ELIAS', 1, 1),
(298, 10, 'GARZON', 1, 3),
(306, 11, 'GIGANTE', 1, 3),
(319, 12, 'GUADALUPE', 1, 2),
(349, 13, 'HOBO', 1, 3),
(357, 14, 'IQUIRA', 1, 4),
(359, 15, 'ISNOS', 1, 1),
(378, 16, 'LA ARGENTINA', 1, 4),
(396, 17, 'LA PLATA', 1, 4),
(483, 18, 'NATAGA', 1, 4),
(503, 19, 'OPORAPA', 1, 1),
(518, 20, 'PAICOL', 1, 4),
(524, 21, 'PALERMO', 1, 5),
(530, 22, 'PALESTINA', 1, 1),
(548, 23, 'PITAL', 1, 2),
(551, 24, 'PITALITO', 1, 1),
(615, 25, 'RIVERA', 1, NULL),
(660, 26, 'SALADOBLANCO', 1, NULL),
(668, 27, 'SAN AGUSTIN', 1, NULL),
(676, 28, 'SANTA MARIA', 1, NULL),
(770, 29, 'SUAZA', 1, NULL),
(791, 30, 'TARQUI', 1, NULL),
(797, 31, 'TESALIA', 1, NULL),
(799, 32, 'TELLO', 1, NULL),
(801, 33, 'TERUEL', 1, NULL),
(807, 34, 'TIMANA', 1, NULL),
(872, 35, 'VILLAVIEJA', 1, NULL),
(885, 36, 'YAGUARA', 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `id_pais` bigint(20) NOT NULL,
  `pai_codigo` int(11) DEFAULT NULL,
  `pai_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`id_pais`, `pai_codigo`, `pai_nombre`) VALUES
(1, 70, 'Colombia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id_persona` bigint(20) NOT NULL,
  `per_apellido` varchar(50) DEFAULT NULL,
  `per_barrio` varchar(50) NOT NULL,
  `per_direccion` varchar(50) NOT NULL,
  `per_estado` varchar(50) DEFAULT NULL,
  `per_fecha_creacion` varchar(50) DEFAULT NULL,
  `per_fecha_modificacion` varchar(50) DEFAULT NULL,
  `per_fecha_nacimiento` varchar(50) DEFAULT NULL,
  `per_nombre` varchar(50) DEFAULT NULL,
  `per_numero_documento` varchar(50) DEFAULT NULL,
  `per_telefono` varchar(50) NOT NULL,
  `id_municipio_lugar_nacimimiento` bigint(20) DEFAULT NULL,
  `id_tipo_dumento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id_persona`, `per_apellido`, `per_barrio`, `per_direccion`, `per_estado`, `per_fecha_creacion`, `per_fecha_modificacion`, `per_fecha_nacimiento`, `per_nombre`, `per_numero_documento`, `per_telefono`, `id_municipio_lugar_nacimimiento`, `id_tipo_dumento`) VALUES
(1, 'Basto', 'centro sur', 'cr 2 sur # 12 -30', 'A', 'Mon May 09 14:37:25 COT 2022', 'Mon May 09 14:37:25 COT 2022', '15-07-95', 'Santiago', '1005827144', '3205842358', 1, 2),
(2, 'Garzon', 'centro sur', 'cr 2 sur # 12 -30', 'A', 'Mon May 09 14:40:56 COT 2022', 'Mon May 09 14:40:56 COT 2022', '15-07-2000', 'Felipe', '10058758444', '35875686558', 6, 2),
(3, 'Basto', 'centro sur', 'cr 2 sur # 12 -30', 'A', 'Mon May 09 14:44:31 COT 2022', 'Mon May 09 14:44:31 COT 2022', '25-07-2001', 'Ever', '12070780744', '37825452558', 13, 2),
(4, 'Garzon', 'centro sur', 'cr 2 sur # 12 -30', 'A', 'Mon May 09 14:51:42 COT 2022', 'Mon May 09 14:51:42 COT 2022', '25-07-2001', 'Felipe', '12070780744', '37825452558', 13, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_CONTRATISTA'),
(3, 'ROLE_RECTOR'),
(4, 'ROLE_COORDINADOR'),
(5, 'ROLE_PROFESOR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sede`
--

CREATE TABLE `sede` (
  `id_sede` bigint(20) NOT NULL,
  `sed_con_dane` bigint(20) DEFAULT NULL,
  `sed_consecutivo` bigint(20) DEFAULT NULL,
  `sed_nombre` varchar(100) DEFAULT NULL,
  `sed_zona` varchar(50) DEFAULT NULL,
  `id_usuario_coordinador` bigint(20) DEFAULT NULL,
  `id_municipio` bigint(20) DEFAULT NULL,
  `id_institucion` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sede`
--

INSERT INTO `sede` (`id_sede`, `sed_con_dane`, `sed_consecutivo`, `sed_nombre`, `sed_zona`, `id_usuario_coordinador`, `id_municipio`, `id_institucion`) VALUES
(1, 1865642, 65846451, 'Las Tapitas', 'Rural', 4, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodiscapacidad`
--

CREATE TABLE `tipodiscapacidad` (
  `id_tipo_discapacidad` bigint(20) NOT NULL,
  `tip_codigo` bigint(20) DEFAULT NULL,
  `tip_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipodiscapacidad`
--

INSERT INTO `tipodiscapacidad` (`id_tipo_discapacidad`, `tip_codigo`, `tip_nombre`) VALUES
(1, 1, 'Ninguna'),
(2, 2, 'Silla de ruedas'),
(3, 3, 'Muletas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_beneficio`
--

CREATE TABLE `tipo_beneficio` (
  `id_tipo_beneficio` bigint(20) NOT NULL,
  `tip_codigo` bigint(20) DEFAULT NULL,
  `tip_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_beneficio`
--

INSERT INTO `tipo_beneficio` (`id_tipo_beneficio`, `tip_codigo`, `tip_nombre`) VALUES
(1, 1, 'Desayuno'),
(2, 2, 'Almuerzo'),
(3, 3, 'Refrigerio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `id_tipo_documento` int(11) NOT NULL,
  `tip_codigo` bigint(20) DEFAULT NULL,
  `tip_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_documento`
--

INSERT INTO `tipo_documento` (`id_tipo_documento`, `tip_codigo`, `tip_nombre`) VALUES
(1, 1, 'Tarjeta de identidad'),
(2, 2, 'Cedula de Ciudadanía'),
(3, 3, 'Cedula Extranjera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `id_persona` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `username`, `id_persona`) VALUES
(1, 'Eversan', '$2a$10$g7tM0NVVFRbChfBJEM/Up.JJ6qBsV0tuwqnovBylSDEjlo4BIEJBK', 'Eversan', 1),
(2, 'wardkjuan44@gmail.com', '$2a$10$wpZYtHNjZSzY8lx7hTJBFuQ1aaVbTfja4wnV0V59xFqzjmnkbxyAu', 'FelipeG', 2),
(3, 'es.basto_2019-1@corhuila.edu.co', '$2a$10$H553LbV0Bx7siDmkSJ6nFuZA14AzUew0gb.8zUu9JBrGVSlyYS6ia', 'EversanRector', 3),
(4, 'jf.garzon_2019-1@corhuila.edu.co', '$2a$10$pK0QffejAXh.tiPa0.e0Hu41/mHZefLzldF9lrDxwCwx7UXXq0AZe', 'FelipeCoodinador', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_roles`
--

CREATE TABLE `usuario_roles` (
  `usuario_id` bigint(20) NOT NULL,
  `rol_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_roles`
--

INSERT INTO `usuario_roles` (`usuario_id`, `rol_id`) VALUES
(1, 1),
(2, 2),
(3, 2),
(4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas`
--

CREATE TABLE `zonas` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `zonas`
--

INSERT INTO `zonas` (`id`, `nombre`) VALUES
(1, 'zona1'),
(2, 'zona2'),
(3, 'zona3'),
(4, 'zona4'),
(5, 'zona5');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `beneficiario`
--
ALTER TABLE `beneficiario`
  ADD PRIMARY KEY (`id_beneficiaro`),
  ADD KEY `FK8quohatp74ypwmh1oru7paij9` (`id_tipo_beneficio`),
  ADD KEY `FKd2bupurnmjn5ucqef3txcc8oi` (`id_estudiante`);

--
-- Indices de la tabla `contratista`
--
ALTER TABLE `contratista`
  ADD PRIMARY KEY (`nit`),
  ADD KEY `FKp77cyonjds9rsbyboq1a4e2iu` (`id_zona`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id_deparmento`),
  ADD UNIQUE KEY `UK_4ry3bv4ogus8w9y7ktawnqjli` (`dep_codigo`),
  ADD KEY `FK80hqpdpt4nu6c4gfrw9yvp9m3` (`id_pais`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`id_estudiante`),
  ADD KEY `FKnhu9x8pxlaeyhgaxvrxh6q2yh` (`id_director`),
  ADD KEY `FKpqmgror4nrvaif7lnh42rbg13` (`id_pais`),
  ADD KEY `FKpn9maw3r9y09mnx56vgjy0roo` (`id_municipio`),
  ADD KEY `FKh579kilil2e6nhr3ykvif6f2q` (`id_tipo_documento`),
  ADD KEY `FKrvqtjxrps2vlk9t03h9jqp0h4` (`id_tipo_discapacidad`),
  ADD KEY `FKpwj9lclscff5tdts7cxlqsg96` (`id_etnia`),
  ADD KEY `FK8p67lxfrc9ybioav22k06tux` (`id_institucion`),
  ADD KEY `FKm59q8v4bwnwmdbgr9webrdro7` (`id_jornada`),
  ADD KEY `FKql4cj8o74rw0glipgef5uodfa` (`id_sede`),
  ADD KEY `FK9b7v92be30qvwf4q4hevu9tdt` (`id_beneficio`);

--
-- Indices de la tabla `etnia`
--
ALTER TABLE `etnia`
  ADD PRIMARY KEY (`id_etnia`),
  ADD UNIQUE KEY `UK_mwltaoy55n5rv4g3ij3t27cmj` (`et_nombre`);

--
-- Indices de la tabla `facial`
--
ALTER TABLE `facial`
  ADD PRIMARY KEY (`id_facial`),
  ADD UNIQUE KEY `UK_bdqe5s7btem1n88bg3u6qum4a` (`img_facial`);

--
-- Indices de la tabla `huella`
--
ALTER TABLE `huella`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `institucion`
--
ALTER TABLE `institucion`
  ADD PRIMARY KEY (`id_institucion`),
  ADD KEY `FKj2gduyvkh0fawbrmhh2dxrsct` (`id_departamento`),
  ADD KEY `FKtg427wued98ndvqs5cuuyf778` (`ins_rector`),
  ADD KEY `FKoldylbucifim6wkekw0nigtws` (`id_municipio`);

--
-- Indices de la tabla `jornada`
--
ALTER TABLE `jornada`
  ADD PRIMARY KEY (`id_jornada`),
  ADD UNIQUE KEY `UK_ho6s6cpuvjjyak299o1oo4lb6` (`nombre`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`id_municipio`),
  ADD KEY `FKe1way3pa23l5j480h48x5tp65` (`id_departamento`),
  ADD KEY `FKbr69bkglfbfumrfwysx2q2v1y` (`id_zona`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id_pais`),
  ADD UNIQUE KEY `UK_elo0ut82lo2fr2b1ykad9mnxv` (`pai_codigo`),
  ADD UNIQUE KEY `UK_k23kjic1yr96r6ajxot4ie9ro` (`pai_nombre`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id_persona`),
  ADD KEY `FKibs1kux1lfnnph9u0ld7gs1xd` (`id_municipio_lugar_nacimimiento`),
  ADD KEY `FKh2kwuq6cu8xiawb8k7e340eqg` (`id_tipo_dumento`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sede`
--
ALTER TABLE `sede`
  ADD PRIMARY KEY (`id_sede`),
  ADD UNIQUE KEY `UK_jtw4ng0f3boykf9yfgwq5ow2j` (`sed_con_dane`),
  ADD UNIQUE KEY `UK_nu4t9u7loeywrkpmbddkaeg9` (`sed_consecutivo`),
  ADD UNIQUE KEY `UK_mmt8c1eshe9en9mdc7j5hf87n` (`sed_nombre`),
  ADD KEY `FKccm4nw2ldpjyvrib1pnmkxjtv` (`id_usuario_coordinador`),
  ADD KEY `FKbvwq0upss3gf2ctu01u0vbxx6` (`id_municipio`),
  ADD KEY `FK196uf7xjv95v5ue3hkcadht2m` (`id_institucion`);

--
-- Indices de la tabla `tipodiscapacidad`
--
ALTER TABLE `tipodiscapacidad`
  ADD PRIMARY KEY (`id_tipo_discapacidad`);

--
-- Indices de la tabla `tipo_beneficio`
--
ALTER TABLE `tipo_beneficio`
  ADD PRIMARY KEY (`id_tipo_beneficio`);

--
-- Indices de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`id_tipo_documento`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKm2dvbwfge291euvmk6vkkocao` (`username`),
  ADD UNIQUE KEY `UKkfsp0s1tflm1cwlj8idhqsad0` (`email`),
  ADD KEY `FKbl3od0hf4p3ylhoyhwqcjhgh` (`id_persona`);

--
-- Indices de la tabla `usuario_roles`
--
ALTER TABLE `usuario_roles`
  ADD PRIMARY KEY (`usuario_id`,`rol_id`),
  ADD KEY `FKbt9i9yrb9ug88xnh82n9m60pr` (`rol_id`);

--
-- Indices de la tabla `zonas`
--
ALTER TABLE `zonas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `beneficiario`
--
ALTER TABLE `beneficiario`
  MODIFY `id_beneficiaro` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id_deparmento` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `id_estudiante` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12710;

--
-- AUTO_INCREMENT de la tabla `etnia`
--
ALTER TABLE `etnia`
  MODIFY `id_etnia` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `facial`
--
ALTER TABLE `facial`
  MODIFY `id_facial` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `huella`
--
ALTER TABLE `huella`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `institucion`
--
ALTER TABLE `institucion`
  MODIFY `id_institucion` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `jornada`
--
ALTER TABLE `jornada`
  MODIFY `id_jornada` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `municipio`
--
ALTER TABLE `municipio`
  MODIFY `id_municipio` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=886;

--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id_pais` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id_persona` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `sede`
--
ALTER TABLE `sede`
  MODIFY `id_sede` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipodiscapacidad`
--
ALTER TABLE `tipodiscapacidad`
  MODIFY `id_tipo_discapacidad` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_beneficio`
--
ALTER TABLE `tipo_beneficio`
  MODIFY `id_tipo_beneficio` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `id_tipo_documento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `zonas`
--
ALTER TABLE `zonas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `beneficiario`
--
ALTER TABLE `beneficiario`
  ADD CONSTRAINT `FK8quohatp74ypwmh1oru7paij9` FOREIGN KEY (`id_tipo_beneficio`) REFERENCES `tipo_beneficio` (`id_tipo_beneficio`),
  ADD CONSTRAINT `FKd2bupurnmjn5ucqef3txcc8oi` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`);

--
-- Filtros para la tabla `contratista`
--
ALTER TABLE `contratista`
  ADD CONSTRAINT `FKp77cyonjds9rsbyboq1a4e2iu` FOREIGN KEY (`id_zona`) REFERENCES `zonas` (`id`);

--
-- Filtros para la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD CONSTRAINT `FK80hqpdpt4nu6c4gfrw9yvp9m3` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`);

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `FK8p67lxfrc9ybioav22k06tux` FOREIGN KEY (`id_institucion`) REFERENCES `institucion` (`id_institucion`),
  ADD CONSTRAINT `FK9b7v92be30qvwf4q4hevu9tdt` FOREIGN KEY (`id_beneficio`) REFERENCES `tipo_beneficio` (`id_tipo_beneficio`),
  ADD CONSTRAINT `FKh579kilil2e6nhr3ykvif6f2q` FOREIGN KEY (`id_tipo_documento`) REFERENCES `tipo_documento` (`id_tipo_documento`),
  ADD CONSTRAINT `FKm59q8v4bwnwmdbgr9webrdro7` FOREIGN KEY (`id_jornada`) REFERENCES `jornada` (`id_jornada`),
  ADD CONSTRAINT `FKnhu9x8pxlaeyhgaxvrxh6q2yh` FOREIGN KEY (`id_director`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `FKpn9maw3r9y09mnx56vgjy0roo` FOREIGN KEY (`id_municipio`) REFERENCES `municipio` (`id_municipio`),
  ADD CONSTRAINT `FKpqmgror4nrvaif7lnh42rbg13` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`),
  ADD CONSTRAINT `FKpwj9lclscff5tdts7cxlqsg96` FOREIGN KEY (`id_etnia`) REFERENCES `etnia` (`id_etnia`),
  ADD CONSTRAINT `FKql4cj8o74rw0glipgef5uodfa` FOREIGN KEY (`id_sede`) REFERENCES `sede` (`id_sede`),
  ADD CONSTRAINT `FKrvqtjxrps2vlk9t03h9jqp0h4` FOREIGN KEY (`id_tipo_discapacidad`) REFERENCES `tipodiscapacidad` (`id_tipo_discapacidad`);

--
-- Filtros para la tabla `institucion`
--
ALTER TABLE `institucion`
  ADD CONSTRAINT `FKj2gduyvkh0fawbrmhh2dxrsct` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_deparmento`),
  ADD CONSTRAINT `FKoldylbucifim6wkekw0nigtws` FOREIGN KEY (`id_municipio`) REFERENCES `municipio` (`id_municipio`),
  ADD CONSTRAINT `FKtg427wued98ndvqs5cuuyf778` FOREIGN KEY (`ins_rector`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD CONSTRAINT `FKbr69bkglfbfumrfwysx2q2v1y` FOREIGN KEY (`id_zona`) REFERENCES `zonas` (`id`),
  ADD CONSTRAINT `FKe1way3pa23l5j480h48x5tp65` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_deparmento`);

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `FKh2kwuq6cu8xiawb8k7e340eqg` FOREIGN KEY (`id_tipo_dumento`) REFERENCES `tipo_documento` (`id_tipo_documento`),
  ADD CONSTRAINT `FKibs1kux1lfnnph9u0ld7gs1xd` FOREIGN KEY (`id_municipio_lugar_nacimimiento`) REFERENCES `municipio` (`id_municipio`);

--
-- Filtros para la tabla `sede`
--
ALTER TABLE `sede`
  ADD CONSTRAINT `FK196uf7xjv95v5ue3hkcadht2m` FOREIGN KEY (`id_institucion`) REFERENCES `institucion` (`id_institucion`),
  ADD CONSTRAINT `FKbvwq0upss3gf2ctu01u0vbxx6` FOREIGN KEY (`id_municipio`) REFERENCES `municipio` (`id_municipio`),
  ADD CONSTRAINT `FKccm4nw2ldpjyvrib1pnmkxjtv` FOREIGN KEY (`id_usuario_coordinador`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `FKbl3od0hf4p3ylhoyhwqcjhgh` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`);

--
-- Filtros para la tabla `usuario_roles`
--
ALTER TABLE `usuario_roles`
  ADD CONSTRAINT `FKbt9i9yrb9ug88xnh82n9m60pr` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FKuu9tea04xb29m2km5lwe46ua` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
