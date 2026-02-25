📌 Proyecto – Consumo de API REST con JavaScript y PHP

Este proyecto implementa una aplicación web que consume una API REST documentada con Swagger (OpenAPI).
Permite realizar operaciones de listar, crear, editar, actualizar y eliminar ventas, así como consumir datos relacionados como productos, clientes y empleados.

La API se puede explorar con documentación interactiva disponible en Swagger UI.

🛠 Tecnologías utilizadas

🟨 JavaScript (ES6) – Fetch API, async/await

🐘 PHP – Integración backend

🎨 HTML5 & CSS3 – Interfaz de usuario

🅱 Bootstrap 5 – Componentes UI

🧪 Postman – Pruebas de endpoints

📄 Swagger (OpenAPI) – Documentación oficial de la API

📄 Documentación oficial de la API

La API consumida en este proyecto está documentada con Swagger UI, lo que permite:

Explorar todos los endpoints disponibles

Ver parámetros de entrada y salida

Probar solicitudes directamente desde el navegador

Generar ejemplos de request/response

Puedes acceder a la documentación aquí:

➡️ https://apifrank.proyectosadso.com/public/swagger/index.html#/

🚀 Endpoints principales consumidos

La documentación Swagger describe rutas disponibles como:

⚡ Ejemplos de endpoints que se consumen en este proyecto:

GET    /ventas
GET    /ventas/{id}
POST   /ventas
PUT    /ventas/{id}
DELETE /ventas/{id}

Además, según Swagger UI hay otros módulos relacionados con:

Productos

Clientes

Empleados

Detalles de ventas

Los endpoints y sus parámetros están disponibles y probados desde la documentación swagger y desde Postman para validar su correcto funcionamiento

📌 Consumo de API (ejemplo con Fetch)

Ejemplo de petición GET a la API:

const response = await fetch('https://apifrank.proyectosadso.com/ventas');
const ventas = await response.json();

Ejemplo de petición PUT:

await fetch(`https://apifrank.proyectosadso.com/ventas/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
📌 Pruebas con Postman

Antes de integrar el frontend y backend, se realizaron pruebas de todos los métodos principales en Postman:

✔ Verificación de respuestas 200, 201, 400, 404
✔ Validación de campos requeridos
✔ Revisión de datos JSON devueltos
✔ Confirmación de parámetros aceptados

Esto asegura que el consumo de la API es correcto y coincide con la documentación generada por Swagger.

🧩 Estructura del proyecto
/
APIFRANK/
│
├── dist/
│   └── css/
│       ├── bootstrap/
│       ├── juego.css
│       ├── lobby.css
│       ├── login.css
│       ├── pin.css
│       └── styles.css
│
├── js/
│   ├── datatables/
│   ├── cargareselect.js
│   ├── clientes.js
│   ├── crearcliente.js
│   ├── crearempelado.js
│   ├── crearproducto.js
│   ├── crearventa.js
│   ├── editarcliente.js
│   ├── editarempleado.js
│   ├── editarproducto.js
│   ├── editarventa.js
│   ├── eliminarcliente.js
│   ├── eliminarempleados.js
│   ├── eliminarproducto.js
│   ├── eliminarventa.js
│   ├── empleados.js
│   ├── productos.js
│   ├── scripts.js
│   ├── ventas.js
│   ├── vercliente.js
│   ├── verempleado.js
│   ├── verproducto.js
│   └── verventa.js
│
├── views/
│   ├── productos.php
│   ├── clientes.php
│   └── empleados.php
│
├── index.html
├── README.md

🧠 Buenas prácticas aplicadas

✔ Manejo de async/await para llamadas asíncronas
✔ Validación de respuestas HTTP
✔ Renderización dinámica de datos con JavaScript
✔ Separación de lógica por módulos
✔ Pruebas desde Swagger y Postman antes de integración
✔ UI responsiva con Bootstrap

🧪 Mejoras futuras

Puedes aplicar mejoras como:

Autenticación con JWT

Paginación en listados

Filtros de búsqueda en frontend

Validaciones avanzadas en formularios

📌 Autor

Proyecto desarrollado por Cesar Rodas

Consumo de API REST documentada con Swagger, integrada en frontend con JavaScript y backend con PHP.