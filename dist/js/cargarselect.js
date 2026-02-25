async function cargarSelects() {
  // Clientes
  const clientes = await fetch(
    "https://apifrank.proyectosadso.com/clientes",
  ).then((res) => res.json());

  const selectCliente = document.getElementById("selectCliente");

  clientes.forEach((cliente) => {
    selectCliente.innerHTML += `
      <option value="${cliente.numero_documento}">
        ${cliente.nombres} ${cliente.apellidos}
      </option>
    `;
  });

  // Empleados
  const empleados = await fetch(
    "https://apifrank.proyectosadso.com/empleados",
  ).then((res) => res.json());

  const selectEmpleado = document.getElementById("selectEmpleado");
  const selectEmpleadoEditar = document.getElementById("selectEmpleadoEditar");

  if (selectEmpleado) {
    empleados.forEach((emp) => {
      selectEmpleado.innerHTML += `
      <option value="${emp.identificacion}">
        ${emp.nombres} ${emp.apellidos}
      </option>
    `;
    });
  }

  if (selectEmpleadoEditar) {
    empleados.forEach((emp) => {
      selectEmpleadoEditar.innerHTML += `
      <option value="${emp.identificacion}">
        ${emp.nombres} ${emp.apellidos}
      </option>
    `;
    });
  }

  // Productos
  const productos = await fetch(
    "https://apifrank.proyectosadso.com/productos",
  ).then((res) => res.json());

  const selectProducto = document.getElementById("selectProducto");

  productos.forEach((prod) => {
    selectProducto.innerHTML += `
      <option value="${prod.id}"
        data-precio="${prod.precio}">
        ${prod.nombre}
      </option>
    `;
  });
}

document.addEventListener("DOMContentLoaded", cargarSelects);
