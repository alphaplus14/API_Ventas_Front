<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>API Frank</title>
    <link href="./dist/css/styles.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.dataTables.min.css">
</head>

<body class="sb-nav-fixed">
    <!-- Barra de navegación superior -->
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <!-- Navbar Brand -->
        <a class="navbar-brand ps-3" href="index.php">
        </a>
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle">
            <i class="fas fa-bars"></i>
        </button>
        <!-- Sidebar Toggle -->
        <!-- Buscador superior -->
        <div class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        </div>
        <!-- Dropdown usuario -->
        <ul class="navbar-nav ms-100 ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-user fa-fw"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><button class="dropdown-item text-success d-flex justify-content-center align-items-center" id="configuracionPerfil" name="<?php echo "2" ?>"><i class="bi bi-person-gear fs-3"></i> Configuracion de perfil</button></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li>
                        <a href="./controller/controllerLogout.php"
                            class="dropdown-item text-danger d-flex justify-content-center align-items-center position-relative ps-4">

                            <i class="bi bi-box-arrow-in-right fs-3"
                                style="position: absolute; left: 15px;"></i>
                            Cerrar Sesión
                        </a>
                    </li>

                </ul>
            </li>
        </ul>
    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <div class="sb-sidenav-menu-heading">Administracion</div>
                        <a class="nav-link active" href="index.php">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Panel de Administracion
                        </a>
                    </div>
                    <div class="nav">
                        <a class="nav-link" href="./dist/views/productos.php">
                            <div class="sb-nav-link"><i class="fas team"></i></div>
                            Productos
                        </a>
                    </div>
                    <div class="nav">
                        <a class="nav-link" href="./dist/views/clientes.php">
                            <div class="sb-nav-link"><i class="fas team"></i></div>
                            Clientes
                        </a>
                    </div>
                    <div class="nav">
                        <a class="nav-link" href="./dist/views/empleados.php">
                            <div class="sb-nav-link"><i class="fas team"></i></div>
                            Empleados
                        </a>
                    </div>
                </div>
                <div class="sb-sidenav-footer">
                    <div class="small">Logueado como:</div>
                    <?php echo "<p class='text-uppercase fw-bold mb-0'> " . "Admin" .  "</p>"; ?>
                </div>
            </nav>
        </div>
        <!-- Contenido principal -->
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Panel de Administracion</h1>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item active">Panel de Administracion</li>
                    </ol>
                    <button class="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#miModal" id="usuarioInsertar">➕ Venta</button>

                    <!-- modal Venta -->
                    <div class="modal fade" id="miModal" tabindex="-1">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h5 class="modal-title">Nueva Venta</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div class="modal-body">
                                    <form id="formularioVenta">

                                        <div class="mb-3">
                                            <label class="form-label">Fecha</label>
                                            <input type="date" class="form-control" id="fecha" required>
                                        </div>

                                        <!-- Cliente -->
                                        <div class="mb-3">
                                            <label class="form-label">Cliente</label>
                                            <select class="form-select" id="selectCliente" required>
                                                <option value="">Seleccione cliente</option>
                                            </select>
                                        </div>

                                        <!-- Empleado -->
                                        <div class="mb-3">
                                            <label class="form-label">Empleado</label>
                                            <select class="form-select" id="selectEmpleado" required>
                                                <option value="">Seleccione empleado</option>
                                            </select>
                                        </div>

                                        <hr>

                                        <!-- Agregar producto -->
                                        <div class="row">
                                            <div class="col-md-6">
                                                <select class="form-select" id="selectProducto">
                                                    <option value="">Seleccione producto</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <input type="number" id="cantidadProducto"
                                                    class="form-control" placeholder="Cantidad" min="1">
                                            </div>
                                            <div class="col-md-3">
                                                <button type="button" class="btn btn-primary w-100"
                                                    id="btnAgregarProducto">
                                                    Agregar
                                                </button>
                                            </div>
                                        </div>

                                        <table class="table table-bordered mt-3">
                                            <thead>
                                                <tr>
                                                    <th>Producto</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th>Subtotal</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody id="tablaProductosVenta"></tbody>
                                        </table>

                                        <div class="mb-3">
                                            <label class="form-label">Total</label>
                                            <input type="text" class="form-control" id="total" readonly>
                                        </div>

                                    </form>
                                </div>

                                <div class="modal-footer">
                                    <button class="btn btn-danger" data-bs-dismiss="modal">
                                        Cancelar
                                    </button>
                                    <button class="btn btn-success" id="btnGuardarVenta">
                                        Guardar Venta
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-table me-1"></i>
                            Ventas
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table id="tablaVentas" class="table table-striped table-hover table-bordered table-sm align-middle text-center">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Fecha</th>
                                            <th>Total</th>
                                            <th>ID Empleado</th>
                                            <th>Nombre</th>
                                            <th class="text-center">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <!-- modal ver Venta-->
            <div class="modal fade" id="verVenta" name="miModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title">Ver Ventas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <form id="formularioVerVenta">
                                <input type="hidden" id="verId">
                                <div class="mb-3">
                                    <label for="fecha" class="form-label">Fecha</label>
                                    <input type="date" class="form-control" id="verFecha" name="fecha" disabled>
                                </div>
                                <div class="mb-3">
                                    <label for="total" class="form-label">Total</label>
                                    <input type="text" class="form-control" id="verTotal" name="total" disabled>
                                </div>

                                <div class="mb-3">
                                    <label for="identificacion" class="form-label">Identificación Cliente</label>
                                    <input type="text" class="form-control" id="verIdentificacion" disabled>
                                </div>
                                <div class="mb-3">
                                    <label for="cliente" class="form-label">Cliente</label>
                                    <input type="text" class="form-control" id="verCliente" disabled>
                                </div>
                                <div class="mb-3">
                                    <label for="cliente" class="form-label">Empleado</label>
                                    <input type="text" class="form-control" id="verIdEmpleado" disabled>
                                </div>
                                <div class="mb-3">
                                    <label for="cliente" class="form-label">Nombre Empleado</label>
                                    <input type="text" class="form-control" id="verEmpleado" disabled>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Productos</label>
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Cantidad</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tablaVentaProductos">
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid px-4">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; ADSO 3064749 / 2026</div>
                        <div>
                            <button class="btn btn-link" id="politicaPrivacidad">Política &amp; Privacidad</button>
                            &middot;
                            <button class="btn btn-link" id="terminosCondiciones">Términos &amp; Condiciones</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <!-- Modal Editar Venta -->
        <div class="modal fade" id="editarVenta" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title">Editar Venta</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        <form id="formEditarVenta">

                            <input type="hidden" id="editarId">

                            <div class="mb-3">
                                <label class="form-label">Fecha</label>
                                <input type="date" class="form-control" id="editarFecha">
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Identificación Cliente</label>
                                <input type="text" class="form-control" id="editarIdentificacion">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Empleado</label>
                                <select class="form-select" id="selectEmpleadoEditar">
                                    <option value="">Seleccione empleado</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Total</label>
                                <input type="number" step="0.01" class="form-control" id="editarTotal">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Productos</label>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody id="editarTablaProductos"></tbody>
                                </table>
                            </div>

                        </form>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button class="btn btn-primary" id="btnActualizarVenta">
                            Guardar Cambios
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"></script>
        <script src="dist/js/datatables/datatables.js"></script>
        <script src="dist/js/scripts.js"></script>
        <script src="dist/js/ventas.js"></script>
        <script src="dist/js/verventa.js"></script>
        <script src="dist/js/eliminarventa.js"></script>
        <script src="dist/js/cargarselect.js"></script>
        <script src="dist/js/editarventa.js"> </script>
        <script src="dist/js/crearventa.js"></script>
</body>

</html>