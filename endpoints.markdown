## poder cargar nosotros los animales
POST 

## nombre, especie, edad, descripción, si está adoptado y una foto
GET

## cada animal esta en un refugio 
GET

## las caracteristicas estan combinadas 
GET
POST
PUT
DELETE

 ### la gente pueda ver los animales sin registrarse
 GET 

 ## cargar y editar lo hacemos nosotros

 PUT 
 POST 
 DELETE 

 ## yo como coordinadora tendria que gestionar quien entra
 
 | Método | Endpoint                   | Función                | Acceso   |
| GET    | /api/animales            | lista animales         | público  |
| GET    | /api/animales/:id        | ver un animal          | público  |
| POST   | /api/animales            | crear animal           | logueado |
| PUT    | /api/animales/:id        | modificar animal       | logueado |
| DELETE | /api/animales/:id        | eliminar animal        | logueado |
| GET    | /api/refugios           | lista refugios         | gestión  |
| GET    | /api/refugios/:id       | ver un refugio         | gestión  |
| POST   | /api/refugios           | crear refugio          | admin    |
| PUT    | /api/refugios/:id        | modificar refugio      | admin    |
| DELETE | /api/refugios/:id        | eliminar refugio       | admin    |
| GET    | /api/caracteristicas     | lista características  | público  |
| GET    | /api/caracteristicas/:id | ver una característica | público  |
