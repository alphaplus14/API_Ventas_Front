let productosEditar = []; //Variable Global

document
  .querySelector("#tablaVentas")
  .addEventListener("click", async function (e) {
    if (!e.target.classList.contains("ventaEditar")) return; //Verifica si el elemento clickeado tiene la clase ventaEditar

    e.preventDefault();

    const idVenta = e.target.dataset.id; //obtiene el id del boton

    try {
      const response = await fetch(
        `https://apifrank.proyectosadso.com/ventas/${idVenta}`, //Hace una peticion GET a la API.
      );

      if (!response.ok) throw new Error("Error al obtener venta");

      const venta = await response.json(); // convierto a JSON

      document.getElementById("editarId").value = venta.id;
      document.getElementById("editarFecha").value = venta.fecha.split(" ")[0]; //divido la fecha y hora con split
      document.getElementById("editarIdentificacion").value =
        venta.numero_documento;
      document.getElementById("selectEmpleadoEditar").value =
        venta.identificacion;
      document.getElementById("editarTotal").value = venta.total;

      productosEditar = venta.productos.map((p) => ({
        //Recorro los productos de la venta y creo un nuevo arreglo
        producto_id: p.id,
        nombre: p.nombre,
        precio: Number(p.precio),
        cantidad: Number(p.cantidad),
      }));

      renderizarProductosEditar(); //Llamola funcion que dibuja la tabla en el modal

      const modal = new bootstrap.Modal(document.getElementById("editarVenta"));
      modal.show(); //Creo una instancia del modal de Bootstrap y Lo muestro en pantalla.
    } catch (error) {
      console.error(error);
    }
  });
function renderizarProductosEditar() {
  const tabla = document.getElementById("editarTablaProductos");
  tabla.innerHTML = ""; //Selecciono la tabla y La limpia antes de pintarla

  productosEditar.forEach((prod, index) => {
    //Recorro cada producto
    const subtotal = prod.precio * prod.cantidad; //Calculo subtotal del producto.

    tabla.innerHTML += `
      <tr>
        <td>${prod.nombre}</td>
        <td>$ ${prod.precio.toLocaleString("es-CO")}</td>
        <td>
          <input type="number" min="1" value="${prod.cantidad}"
            class="form-control cantidadEditar"
            data-index="${index}">
        </td>
        <td>$ ${subtotal.toLocaleString("es-CO")}</td>
        <td>
          <button class="btn btn-danger btn-sm eliminarEditar"
            data-index="${index}"> 
            ❌
          </button>
        </td>
      </tr>
    `;
  });

  recalcularTotalEditar();
}

document.addEventListener("input", function (e) {
  if (e.target.classList.contains("cantidadEditar")) {
    const index = e.target.dataset.index;
    productosEditar[index].cantidad = Number(e.target.value); //Obtiene la posición y actualiza la cantidad en el arreglo
    renderizarProductosEditar(); //Vuelve a dibujar la tabla con el nuevo subtotal
  }
});

document.addEventListener("click", function (e) {
  // esta funcion se crea para eliminar el producto del arreglo y actulizar la tabla y el total
  if (e.target.classList.contains("eliminarEditar")) {
    const index = e.target.dataset.index;
    productosEditar.splice(index, 1);
    renderizarProductosEditar();
  }
});

function recalcularTotalEditar() {
  const total = productosEditar.reduce((acc, p) => {
    //reduce suma todos los subtotales y acc es un acumulador
    return acc + p.precio * p.cantidad;
  }, 0);

  document.getElementById("editarTotal").value = total.toFixed(2); //muestra el total con 2 decimales
}

document
  .getElementById("btnActualizarVenta")
  .addEventListener("click", async function () {
    //escucha el click y obtengo valores de los input
    const id = document.getElementById("editarId").value;
    const cliente = document.getElementById("editarIdentificacion").value;
    const empleado = document.getElementById("selectEmpleadoEditar").value;
    const total = document.getElementById("editarTotal").value;

    const ventaActualizada = {
      total: Number(total),
      cliente_numero_documento: cliente,
      empleado_identificacion: empleado,
    }; //Construyo el JSON que enviao al backend

    console.log("Enviando actualización:", ventaActualizada); //para ver que datos se envian

    const response = await fetch(
      `https://apifrank.proyectosadso.com/ventas/${id}`,
      {
        method: "PUT", //hago la peticion y envio datos actualizados
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ventaActualizada), //envia JSON
      },
    );

    const resultado = await response.json(); //guardo la respuesta en resultado
    console.log(resultado); // Quiero ver la respuesta en caso de error

    if (response.ok) {
      alert("Venta actualizada correctamente");
      cargarVentas(); //si todo sale bien carga el mensaje y se recarga la tabla ventas

      bootstrap.Modal.getInstance(
        document.getElementById("editarVenta"),
      ).hide();
    } else {
      alert("Error al actualizar");
    }
  });
