# API REST - Refugio de Animales

## Descripción

Este proyecto consiste en una API REST desarrollada con Node.js y Express para gestionar información de un refugio de animales.

La API permite trabajar con animales, refugios y características. También cuenta con la posibilidad de cargar y consultar fotos de los animales.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- Sequelize
- MySQL
- Git y GitHub

## Requisitos previos

Para poder ejecutar el proyecto, es necesario tener instalado:

- [Node.js](https://nodejs.org/)
- npm, que viene incluido con Node.js
- MySQL, con la base de datos configurada para el proyecto
- Git, en caso de querer clonar el repositorio

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

Reemplazá `URL_DEL_REPOSITORIO` por la dirección de tu repositorio de GitHub.

### 2. Entrar en la carpeta del proyecto

```bash
cd proyecto-animales
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto con los datos de conexión a la base de datos y el puerto del servidor, según la configuración utilizada en el proyecto.

No subir este archivo a GitHub, ya que puede contener información sensible.

### 5. Iniciar el servidor

```bash
node app.js
```

Si todo está configurado correctamente, el servidor se iniciará y mostrará un mensaje indicando que está escuchando en el puerto 3000.

## Endpoints principales

La API cuenta con las siguientes rutas para acceder a la información:

| Recurso | Ruta |
|---|---|
| Animales | `/api/animales` |
| Refugios | `/api/refugios` |
| Características | `/api/caracteristicas` |

Las operaciones disponibles dependen de las rutas implementadas para cada recurso.

## Acceso a las imágenes

Las imágenes se guardan en la carpeta `uploads` y se pueden consultar desde el navegador mediante una URL como esta:

```text
http://localhost:3000/uploads/rusia.jpg
```

El nombre del archivo debe coincidir con una imagen que exista en la carpeta `uploads`.

## Detener el servidor

Para detener el servidor, presioná `Ctrl + C` en la terminal donde está ejecutándose.

## Autor

Jhonatan Chacón