# 🛒 APIFRANK - Sistema de Gestión de Ventas

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![PHP](https://img.shields.io/badge/Backend-PHP-blue)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap%205-purple)

Esta aplicación web permite la gestión integral de un ciclo de ventas (Listar, Crear, Editar y Eliminar), consumiendo una **API REST** robusta. El proyecto integra una interfaz dinámica con JavaScript y un soporte en el backend con PHP, asegurando una experiencia de usuario fluida y responsiva.

---

## 🚀 Vista Previa e Interacción

La aplicación consume datos en tiempo real de una API documentada bajo el estándar **OpenAPI (Swagger)**.

- **Documentación Interactiva:** [Explorar Swagger UI](https://apifrank.proyectosadso.com/public/swagger/index.html#/)
- **Capacidades:** Gestión de ventas, productos, clientes y empleados.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología           | Uso Principal                                                       |
| :------------------- | :------------------------------------------------------------------ |
| **JavaScript (ES6)** | Lógica de negocio, Fetch API y manipulación del DOM.                |
| **PHP**              | Integración y soporte de procesos en el servidor.                   |
| **Bootstrap 5**      | Diseño responsivo y componentes de interfaz listos para producción. |
| **HTML5 & CSS3**     | Estructura semántica y estilos personalizados.                      |
| **Postman**          | Pruebas de carga, validación de endpoints y testing de JSON.        |
| **Swagger**          | Documentación técnica y pruebas interactivas de la API.             |

---

## 🔗 Endpoints Principales Consumidos

Gracias a la integración con Swagger, el proyecto consume los siguientes recursos de forma eficiente:

### Ventas (`/ventas`)

- `GET /ventas` - Obtiene el listado completo de transacciones.
- `POST /ventas` - Registra una nueva venta en el sistema.
- `PUT /ventas/{id}` - Actualiza la información de una venta existente.
- `DELETE /ventas/{id}` - Elimina un registro de la base de datos.

> [!TIP]
> También se integran módulos de **Productos**, **Clientes** y **Empleados** para garantizar la integridad referencial de cada venta.

---

## 💻 Ejemplos de Implementación

### Consumo de API con Fetch (Async/Await)

```javascript
// Ejemplo: Obtener todas las ventas
const getVentas = async () => {
  try {
    const response = await fetch(
      "[https://apifrank.proyectosadso.com/ventas](https://apifrank.proyectosadso.com/ventas)",
    );
    if (!response.ok) throw new Error("Error en la petición");
    const ventas = await response.json();
    console.log(ventas);
  } catch (error) {
    console.error("Hubo un problema:", error);
  }
};
```

---

## 📂 Estructura del Proyecto

A continuación se detalla la organización de los directorios y archivos principales:

```text
APIFRANK/
├── dist/                # Recursos compilados y estilos
│   └── css/             # Archivos CSS (Bootstrap, Custom)
├── js/                  # Lógica de la aplicación
│   ├── datatables/      # Plugins de tablas
│   ├── ventas.js        # Módulo de gestión de ventas
│   ├── productos.js     # Módulo de gestión de productos
│   └── ...              # Archivos CRUD por entidad
├── views/               # Vistas modulares en PHP
│   ├── productos.php
│   ├── clientes.php
│   └── empleados.php
├── index.html           # Punto de entrada principal
└── README.md            # Documentación
```

---

## 🧠 Buenas Prácticas Aplicadas

- Modularización: Cada entidad (clientes, ventas, etc.) tiene su propia lógica de JavaScript para facilitar el mantenimiento.

- Asincronía Pura: Uso extensivo de async/await para evitar el bloqueo del hilo principal durante las peticiones.

- Validación Previa: Todos los flujos fueron testeados en Postman antes de la implementación en código para asegurar respuestas 200 OK y 201 Created.

- UI/UX: Diseño pensado en la movilidad del usuario gracias al sistema de rejilla de Bootstrap.

---

## 🧪 Próximas Mejoras

- [ ] Implementación de Autenticación JWT para mayor seguridad.

- [ ] Paginación en el lado del servidor para grandes volúmenes de datos.

- [ ] Filtros avanzados de búsqueda por fecha y cliente.

- [ ] Generación de reportes en PDF de las ventas realizadas.

---

## 👤 Autor

Cesar Rodas Desarrollador apasionado por el ecosistema Web y la integración de APIs.
