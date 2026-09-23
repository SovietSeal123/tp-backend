# README - Sistema Gestor de Blockbuster

## 1. Objetivo del proyecto.

El objetivo de este proyecto es proporcionar a una empresa de renta de DVDs y VHSs una forma facil de poder crear, leer, obtener, actualizar, y borrar las peliculas de su catalogo.

-------------------------------------------------------

## 2. Funcionalidades. 

El proyecto cuenta con las siguientes funcionalidades:

* <b>info:</b> Muestra los comandos disponibles.
* <b>read:</b> Muestra todas las peliculas dentro de la base de datos.
* <b>find:</b> Muestra una pelicula en concreta utilizando su _id.
* <b>create:</b> Crea una pelicula utilizando los siguientes campos: "title" - "director" - "genre" - "year" - "format" - "price" - "stock" - "available".
* <b>update:</b> Permite actualizar una película utilizando el _id específico y proporcionando nuevamente los datos de la película.
* <b>delete:</b> Elimina una pelicula usando su _id.


-------------------------------------------------------

## 3. Tecnologías utilizadas.

* <b>TypeScript
* Mongoose
* MongoDB
* Node.js</b>

-------------------------------------------------------

## 4. Dependencias

Las principales dependencias utilizadas por el proyecto son:

* <b>mongoose:</b> Permite establecer la conexión con MongoDB y trabajar con los documentos mediante esquemas y modelos.
* <b>typescript:</b> Permite desarrollar el proyecto utilizando TypeScript.
* <b>tsx:</b> Permite ejecutar los archivos TypeScript directamente.
* <b>@types/node:</b> Proporciona los tipos necesarios para utilizar funcionalidades de Node.js desde TypeScript.

-------------------------------------------------------

## 5. Instalación y configuración

Para utilizar el proyecto es necesario contar con Node.js y MongoDB instalados.

Luego de descargar o clonar el proyecto, se deben instalar las dependencias necesarias mediante:

npm install

La conexión con MongoDB se configura mediante una variable de entorno URI_DB, que debe contener la dirección de la base de datos utilizada por el proyecto.

-------------------------------------------------------

## 6. Uso

El programa funciona mediante comandos ejecutados desde la terminal.

Las operaciones disponibles son:

* <b>info:</b> Obtener todos los comandos disponibles
* <b>read:</b> Obtener todas las películas.
* <b>find:</b> Obtener una película mediante su _id.
* <b>create:</b> Crear una nueva película.
* <b>update:</b> Actualizar una película mediante su _id.
* <b>delete:</b> Eliminar una película mediante su _id.

Cada operación requiere los datos correspondientes para poder ejecutarse correctamente.

-------------------------------------------------------

## 7. Estructura de los datos

Las películas almacenadas utilizan los siguientes campos y tipos de datos:

* <b>title:</b> string
* <b>director:</b> string.
* <b>genre:</b> string.
* <b>year:</b> number.
* <b>format:</b> string.
* <b>price:</b> number.
* <b>stock:</b> number.
* <b>available:</b> boolean.

Los campos numéricos son validados para evitar la introducción de valores no numéricos.