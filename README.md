# Movie App 

  <p align="center">
     <img src="https://github.com/OsOsorioP/PTInlaze/blob/main/ImageWeb.png" alt="home" title="Pantalla de inicio" width="660">
   </p>

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
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER= (usuario de postgres)
   DB_PASS= (contraseña de postgres)
   DB_NAME= (nombre de la base de datos)

   BASE_URL = https://api.themoviedb.org/3
   TMDB_API_KEY=ff37d60dfcd2f7f623b26bfe9b5acaa2
   TOKEN = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjM3ZDYwZGZjZDJmN2Y2MjNiMjZiZmU5YjVhY2FhMiIsIm5iZiI6MTczMzc4MDI3My45NDMsInN1YiI6IjY3NTc2MzMxOWUxMmZhMjVlOGZiZjRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gRLqZHF4WpAxVfAOcdqDKqvPJ6X0LTAdv4f01tth71U
   ```

5. **Inicia el servidor**:
   ```bash
   npm start:dev
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
   NEXT_PUBLIC_BACKEND_URL = http://localhost:4000/v1
   BACKEND_MOVIES = http://localhost:4000/v1/movies
   NEXTAUTH_SECRET=#$%gfdj$%#dfsd$hdshg#%jh5t$Esfsdy83
   ```

4. **Inicia la aplicación**:
   ```bash
   npm run dev
   ```

5. **Verifica la aplicación** en `http://localhost:3000`.

## Tecnologías

### Backend

- **Nest.js**: Framework.
- **PostgreSQL**: Base de datos NoSQL.
- **JWT**: JSON Web Tokens para la autenticación de usuarios.
- **bcryptjs**: Biblioteca para encriptar contraseñas.
- **Axios**: Cliente HTTP para consumir APIs externas como TMDB.

### Frontend

- **Next.js**: Framework.
- **TypeScript**: Lenguaje de programación.
- **TailwindCSS**: Framework de CSS utilitario.
- **Shadcn/ui**: Biblioteca de componentes de interfaz de usuario.
- **Axios**: Cliente HTTP.

## Justificación Técnica

### Backend

- **Escalabilidad**: El uso de PostgreSQL y JWT permite una escalabilidad eficiente para el manejo de usuarios y películas.
- **Seguridad**: El hash de contraseñas con bcrypt y la autenticación mediante JWT aseguran una gestión segura de las credenciales de los usuarios.

### Frontend

- **Next.js**: Su capacidad para crear aplicaciones React con soporte para renderizado del lado del servidor (SSR), lo que mejora el rendimiento y SEO.
- **TailwindCSS**: Para una implementación rápida de interfaces responsivas y personalizadas.
  
## Desafíos Superados

- **Manejo de la autenticación**: Implementar JWT y la encriptación de contraseñas fue un desafío inicial, pero se logró una solución segura y eficiente.
- **Integración de la API de TMDB**: Integrar TMDB para obtener datos de películas y filtrar correctamente según los criterios fue una tarea desafiante, pero resultó exitosa gracias a Axios.

## Mejoras Futuras

- **Paginación**: Implementar paginación para las respuestas de películas y mejorar la eficiencia de las consultas.
- **Mejoras en seguridad**.
