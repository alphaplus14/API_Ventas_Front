$("#tablaProductos").DataTable({
  responsive: true,
  autoWidth: false,
  pageLength: 10,
  lengthMenu: [5, 10, 20, 50, 100],
  language: {
    url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json",
  },

  columnDefs: [
    { targets: 0, width: "30px" }, // ID
    { targets: 3, width: "100px" }, // ID
    { targets: 6, orderable: false, width: "140px" }, // Acciones
  ],
});
$("#tablaClientes").DataTable({
  responsive: true,
  autoWidth: false,
  pageLength: 10,
  lengthMenu: [5, 10, 20, 50, 100],
  language: {
    url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json",
  },

  columnDefs: [
    { targets: 0, width: "40px" }, // ID
    { targets: 1, width: "70px" }, // ID
    { targets: 2, width: "100px" }, // ID
    { targets: 3, width: "100px" }, // ID
    { targets: 4, orderable: false, width: "140px" }, // Acciones
  ],
});

$("#tablaEmpleados").DataTable({
  responsive: true,
  autoWidth: false,
  pageLength: 10,
  order: [[0, "desc"]],
  lengthMenu: [5, 10, 20, 50, 100],
  language: {
    url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json",
  },

  columnDefs: [
    { targets: 0, width: "40px" }, // ID
    { targets: 1, width: "70px" }, // ID
    { targets: 2, width: "100px" }, // ID
    { targets: 3, width: "100px" }, // ID
    { targets: 4, orderable: false, width: "140px" }, // Acciones
  ],
});

$("#tablaVentas").DataTable({
  responsive: true,
  autoWidth: false,
  pageLength: 10,
  lengthMenu: [5, 10, 20, 50, 100],
  language: {
    url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json",
  },

  columnDefs: [
    { targets: 0, width: "30px" }, // ID
    { targets: 1, width: "100px" }, // Fecha
    { targets: 2, width: "100px" }, // Total
    { targets: 3, width: "40px" }, // Id empleado
    { targets: 4, width: "140px" }, // nombre
    { targets: 5, width: "140px" }, // Acciones
  ],
});
