# Movie App 
## Descripción

El repositorio contiene tanto el **backend** como el **frontend** para una aplicación de películas que permite el registro e inicio de sesión de usuarios, y ofrece funcionalidad para filtrar películas a través de la API de The Movie Database (TMDB).

### Backend
El backend se encarga de gestionar la autenticación de usuarios y de exponer un servicio para filtrar películas.

### Frontend
El frontend es responsable de la interfaz de usuario, permitiendo a los usuarios registrarse, iniciar sesión, y filtrar películas de manera interactiva.

## Instalación

### Backend

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/OsOsorioP/PTInlaze.git
   ```

2. **Navega al directorio del backend**:
   ```bash
   cd PTInlaze/backend
   ```

3. **Instala las dependencias**:
   ```bash
   npm install
   ```

4. **Configura el entorno**:
   Crea un archivo `.env` y agrega las siguientes variables de entorno:

   ```env
   MONGO_URI=tu_conexion_a_mongo
   JWT_SECRET=tu_secreto_de_jwt
   TMDB_API_KEY=tu_api_key_de_tmdb
   ```

5. **Inicia el servidor**:
   ```bash
   npm start
   ```

6. **Verifica el servidor** en `http://localhost:4000`.

### Frontend

1. **Navega al directorio del frontend**:
   ```bash
   cd PTInlaze/frontend
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura el entorno**:
   Crea un archivo `.env.local` y agrega las siguientes variables de entorno:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Inicia la aplicación**:
   ```bash
   npm run dev
   ```

5. **Verifica la aplicación** en `http://localhost:3000`.

## Endpoints

### Backend

#### 1. **Sign Up (Registro de usuario)**

**Método**: `POST`  
**URL**: `/v1/auth/signup`

- **Body**:
  ```json
  {
    "email": "usuario@example.com",
    "password": "tu_contraseña"
  }
  ```

#### 2. **Sign In (Inicio de sesión)**

**Método**: `POST`  
**URL**: `/v1/auth/login`

- **Body**:
  ```json
  {
    "email": "usuario@example.com",
    "password": "tu_contraseña"
  }
  ```

#### 3. **Filtrar películas**

**Método**: `GET`  
**URL**: `/v1/movies`

### Frontend

El frontend proporciona una interfaz donde los usuarios pueden interactuar con los siguientes elementos:

- **Formulario de registro** y **login**.
- **Visualización de películas filtradas** basadas en género, popularidad o título.
- **Carga de más películas** al hacer scroll utilizando la API de TMDB.

## Tecnologías

### Backend

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework de servidor web para Node.js.
- **MongoDB**: Base de datos NoSQL.
- **JWT**: JSON Web Tokens para la autenticación de usuarios.
- **bcryptjs**: Biblioteca para encriptar contraseñas.
- **Axios**: Cliente HTTP para consumir APIs externas como TMDB.

### Frontend

- **Next.js**: Framework para React.
- **TypeScript**: Lenguaje de programación que añade tipos estáticos a JavaScript.
- **TailwindCSS**: Framework de CSS utilitario para construir diseños personalizados.
- **Shadcn/ui**: Biblioteca de componentes de interfaz de usuario.
- **Axios**: Cliente HTTP para consumir la API del backend.

## Justificación Técnica

### Backend

- **Escalabilidad**: El uso de MongoDB y JWT permite una escalabilidad eficiente para el manejo de usuarios y películas.
- **Seguridad**: El hash de contraseñas con bcrypt y la autenticación mediante JWT aseguran una gestión segura de las credenciales de los usuarios.

### Frontend

- **React y Next.js**: Se eligió Next.js por su capacidad para crear aplicaciones React con soporte para renderizado del lado del servidor (SSR), lo que mejora el rendimiento y SEO.
- **TailwindCSS**: Para una implementación rápida de interfaces responsivas y personalizadas.
  
## Desafíos Superados

- **Manejo de la autenticación**: Implementar JWT y la encriptación de contraseñas fue un desafío inicial, pero se logró una solución segura y eficiente.
- **Integración de la API de TMDB**: Integrar TMDB para obtener datos de películas y filtrar correctamente según los criterios fue una tarea desafiante, pero resultó exitosa gracias a Axios.

## Mejoras Futuras

- **Paginación**: Implementar paginación para las respuestas de películas y mejorar la eficiencia de las consultas.
- **Mejoras en seguridad**: Añadir más validaciones de seguridad, como la verificación de los roles de los usuarios.
