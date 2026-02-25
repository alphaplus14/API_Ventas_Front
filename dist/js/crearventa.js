let productosVenta = [];

document
  .getElementById("btnAgregarProducto")
  .addEventListener("click", function () {
    const select = document.getElementById("selectProducto");
    const id = select.value;
    const nombre = select.options[select.selectedIndex].text;
    const precio = Number(
      select.options[select.selectedIndex].getAttribute("data-precio"),
    );
    const cantidad = Number(document.getElementById("cantidadProducto").value); //convierto el vlor a tipo numero con la funcion number

    if (!id || cantidad <= 0) {
      alert("Seleccione producto y cantidad válida"); //para no enviar campos vacios
      return;
    }

    // Evitar repetir producto con la funcion find
    const existe = productosVenta.find((p) => p.id == id);
    if (existe) {
      alert("Producto ya agregado");
      return;
    }

    productosVenta.push({
      id,
      nombre,
      precio,
      cantidad,
    });

    renderizarProductos();
  });

function renderizarProductos() {
  const tabla = document.getElementById("tablaProductosVenta");
  tabla.innerHTML = "";

  productosVenta.forEach((prod, index) => {
    const subtotal = prod.precio * prod.cantidad;

    tabla.innerHTML += `
      <tr>
        <td>${prod.nombre}</td>
        <td>$ ${prod.precio.toLocaleString("es-CO")}</td>
        <td>${prod.cantidad}</td>
        <td>$ ${subtotal.toLocaleString("es-CO")}</td>
        <td>
          <button class="btn btn-danger btn-sm eliminarProd"
            data-index="${index}">
            ❌
          </button>
        </td>
      </tr>
    `;
  });

  recalcularTotal();
}

function recalcularTotal() {
  const total = productosVenta.reduce((acc, p) => {
    return acc + p.precio * p.cantidad;
  }, 0);

  document.getElementById("total").value = "$ " + total.toLocaleString("es-CO");
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("eliminarProd")) {
    const index = e.target.dataset.index;
    productosVenta.splice(index, 1);

    renderizarProductos();
  }
});

document
  .getElementById("btnGuardarVenta")
  .addEventListener("click", async function () {
    if (productosVenta.length === 0) {
      alert("Agregue al menos un producto");
      return;
    }

    const fechaInput = document.getElementById("fecha").value;
    const fechaCompleta = fechaInput + " 00:00:00"; //agrega la fecha completa ya que se guarda en datetime

    const totalNumerico = productosVenta.reduce((acc, p) => {
      return acc + p.precio * p.cantidad;
    }, 0);

    const nuevaVenta = {
      fecha: fechaCompleta,
      cliente_numero_documento: document.getElementById("selectCliente").value,
      empleado_identificacion: document.getElementById("selectEmpleado").value,
      total: totalNumerico.toFixed(2), //se guarda con  2 decimales
      productos: productosVenta.map((p) => ({
        producto_id: Number(p.id),
        cantidad: Number(p.cantidad),
      })),
    };

    console.log("JSON enviado:", JSON.stringify(nuevaVenta, null, 2));

    console.log("Cliente:", document.getElementById("selectCliente").value);
    console.log("Empleado:", document.getElementById("selectEmpleado").value);

    const response = await fetch("https://apifrank.proyectosadso.com/ventas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaVenta),
    });

    const resultado = await response.json();
    console.log("Respuesta:", resultado);
    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#miModal"),
    );
    modal.hide();
    // Limpiar el formulario
    document.querySelector("#formularioVenta").reset();

    if (resultado.success) {
      alert("Venta registrada correctamente");
      cargarVentas();
      productosVenta = [];
      renderizarProductos();
    } else {
      alert("Error al registrar venta");
    }
  });
