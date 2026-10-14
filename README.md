# # API REST - Refugio de Animales

## Descripción

Este proyecto consiste en una aplicacion desarrollada con Node.js y Express para gestionar información relacionada con un refugio de animales.

La APP cuenta con rutas para administrar animales, refugios y características.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- Git y GitHub

## Requisitos previos

Para ejecutar el proyecto, es necesario tener instalado:

- [Node.js](https://nodejs.org/)
- npm, que se instala junto con Node.js
- Git (opcional, para clonar el repositorio)

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

Reemplazá `URL_DEL_REPOSITORIO` por la URL de tu repositorio de GitHub.

### 2. Ingresar a la carpeta del proyecto

```bash
cd proyecto-animales
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Iniciar el servidor

```bash
node app.js
```

Si el servidor inicia correctamente, debería mostrar el mensaje configurado en el proyecto indicando que está escuchando en el puerto 3000.

## Endpoints principales

La API utiliza las siguientes rutas base:

| Recurso | Ruta |
|---|---|
| Animales | `/api/animales` |
| Refugios | `/api/refugios` |
| Características | `/api/caracteristicas` |

Las operaciones disponibles dependen de los métodos HTTP implementados en cada ruta.

## Acceso a las imágenes

Las imágenes almacenadas en la carpeta `uploads` se pueden consultar mediante una URL como la siguiente:

```text
http://localhost:3000/uploads/rusia.jpg
```

Para acceder a las imágenes desde el navegador, el servidor debe tener configurado el acceso estático a la carpeta `uploads`.

## Detener el servidor

Para detener el servidor, presioná:

```text
Ctrl + C
```

## Autor
Jhonatan chacon
git add README.md
git commit -m "Agregar README con instrucciones de instalación"
git push