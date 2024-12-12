# Movie App Backend

## Descripción

Este es el backend para una aplicación de películas que permite el registro y autenticación de usuarios, y ofrece funcionalidad para filtrar películas a través de la API de The Movie Database (TMDB).

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu_usuario/PTInlaze.git
   ```

2. **Navega al directorio del proyecto**:
   ```bash
   cd movie-app-backend
   ```

3. **Instala las dependencias**:
   ```bash
   npm install
   ```

4. **Configura el entorno**:
   Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

   ```env
   MONGO_URI=tu_conexion_a_mongo
   JWT_SECRET=tu_secreto_de_jwt
   TMDB_API_KEY=tu_api_key_de_tmdb
   ```

   Asegúrate de reemplazar `tu_conexion_a_mongo`, `tu_secreto_de_jwt` y `tu_api_key_de_tmdb` con los valores reales.

5. **Inicia el servidor**:
   ```bash
   npm start
   ```

   El servidor comenzará a ejecutarse en `http://localhost:5000` (o el puerto configurado en `.env`).

6. **Verifica que el servidor esté corriendo correctamente** visitando el endpoint base en tu navegador:
   ```bash
   http://localhost:5000
   ```

## Endpoints

### 1. **Sign Up (Registro de usuario)**

**Método**: `POST`  
**URL**: `/api/auth/signup`

- **Body**:
  ```json
  {
    "email": "usuario@example.com",
    "password": "tu_contraseña"
  }
  ```

- **Respuesta**:
  - `201 Created`: Usuario registrado correctamente.
  - `400 Bad Request`: Error en la validación de datos.

### 2. **Sign In (Inicio de sesión)**

**Método**: `POST`  
**URL**: `/api/auth/login`

- **Body**:
  ```json
  {
    "email": "usuario@example.com",
    "password": "tu_contraseña"
  }
  ```

- **Respuesta**:
  - `200 OK`: Token JWT generado correctamente.
  - `401 Unauthorized`: Credenciales incorrectas.

### 3. **Filtrar películas**

**Método**: `GET`  
**URL**: `/api/movies`

- **Parámetros de consulta**:
  - `genre`: Género de la película (opcional).
  - `popularity`: Filtro por popularidad (opcional).
  - `title`: Título de la película (opcional).

- **Ejemplo de URL**:
  ```bash
  /api/movies?genre=comedy&popularity=high
  ```

- **Respuesta**:
  - `200 OK`: Lista de películas filtradas en formato JSON.
  - `400 Bad Request`: Error en los parámetros de la consulta.

## Tecnologías

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework de servidor web para Node.js.
- **MongoDB**: Base de datos NoSQL.
- **JWT**: JSON Web Tokens para la autenticación de usuarios.
- **bcryptjs**: Biblioteca para encriptar contraseñas.
- **Axios**: Cliente HTTP para consumir APIs externas como TMDB.

## Justificación Técnica

- **Escalabilidad**: La arquitectura del backend es escalable mediante la utilización de una base de datos NoSQL como MongoDB, que permite gestionar grandes volúmenes de datos de manera eficiente.
- **Seguridad**: El uso de JWT para la autenticación de usuarios y bcrypt para el hash de contraseñas asegura que la información sensible esté protegida.
- **Eficiencia**: Se utiliza una API de filtrado eficiente para manejar las consultas de películas, optimizando el rendimiento de la aplicación.

## Desafíos Superados

- **Manejo de la autenticación**: Implementar la autenticación con JWT y bcrypt fue un desafío inicial, pero se logró una solución robusta.
- **Integración con TMDB**: La integración con la API de TMDB para filtrar películas de manera eficiente fue otro reto, pero se logró gracias a la biblioteca Axios para manejar las solicitudes HTTP.

## Mejoras Futuras

- **Agregar paginación** a los resultados de las películas para mejorar el rendimiento cuando se manejen grandes cantidades de datos.
- **Refinamiento de la seguridad**: Mejorar la validación de tokens y la implementación de roles de usuario para mayor control de acceso.
