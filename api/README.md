BACKEND WEB - PRUEBA TECNICA

 - El siguiente es un proyecto Backend que realiza una solicitud a una API externa y almacena la data en una base de datos PostgreSQL manipulada mediante sequelize ORM, un servidor construido en NodeJs con Express  

<!-- Requisitos -->
Tener instalado Visual Studio Code, NPM, Node.JS, PostgreSQL


Instalación
 - Ejecutar el comando npm install para descargar todas las dependencias del proyecto
 - Crear el archivo .env en la raiz del proyecto y agregar los valores correspondientes a la BD (Base de Datos), para ser utilizada de manera local con las siguientes variables:

DB_USER = postgres  #motor de la DB
DB_PASSWORD = #contraseña de la DB
DB_NAME =   tecno_prueba  # nombre de la DB 
DB_HOST = localhost:5432  #puerto predeterminado de la DB
PORT = 3001

Uso
 - Usar el comando  nodemon index.js o npm start en la ruta correspondiente para correr el servidor, tambien se verificara la conexion a la BD al mismo tiempo

 se pueden hacer las pruebas mediante Thurder Client o postman

<!-- Contribución
Instrucciones para que las personas contribuyan con el proyecto. Puedes incluir detalles sobre cómo clonar el repositorio, cómo crear una rama, cómo realizar una solicitud de extracción, etc. -->

Autores
 - Cristian Eduardo Toro Toro

Licencia
 - ISC