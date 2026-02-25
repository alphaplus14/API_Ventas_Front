document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("ventaVer")) {
    const id = e.target.dataset.id;

    try {
      const response = await fetch(
        `https://apifrank.proyectosadso.com/ventas/${id}`,
      );
      const venta = await response.json();

      cargarVentaEnModal(venta);

      const modal = new bootstrap.Modal(document.getElementById("verVenta"));
      modal.show();
    } catch (error) {
      console.error("Error al obtener la venta:", error);
    }
  }
});

function cargarVentaEnModal(venta) {
  document.getElementById("verId").value = venta.id;

  document.getElementById("verFecha").value = venta.fecha.split(" ")[0];

  let totalCalculado = venta.productos.reduce((acc, prod) => {
    return acc + Number(prod.subtotal);
  }, 0);

  document.getElementById("verTotal").value =
    "$ " + totalCalculado.toLocaleString("es-CO");

  document.getElementById("verIdentificacion").value = venta.numero_documento;

  document.getElementById("verCliente").value =
    venta.cliente_nombres + " " + venta.cliente_apellidos;

  document.getElementById("verIdEmpleado").value = venta.identificacion;

  document.getElementById("verEmpleado").value =
    venta.empleado_nombres + " " + venta.empleado_apellidos;

  const tabla = document.getElementById("tablaVentaProductos");
  tabla.innerHTML = "";

  venta.productos.forEach((producto) => {
    tabla.innerHTML += `
      <tr>
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>$ ${Number(producto.subtotal).toLocaleString("es-CO")}</td>
      </tr>
    `;
  });
}
