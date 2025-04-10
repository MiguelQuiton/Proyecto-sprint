document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los botones y vistas
  const btnCliente = document.getElementById("btnCliente");
  const btnEmpleado = document.getElementById("btnEmpleado");
  const btnGerente = document.getElementById("btnGerente");
  
  const menuPrincipal = document.getElementById("menuPrincipal");
  const clienteView = document.getElementById("clienteView");
  const empleadoView = document.getElementById("empleadoView");
  const gerenteView = document.getElementById("gerenteView");

  // Función para ocultar todas las vistas
  function hideAllViews() {
    clienteView.classList.add("hidden");
    empleadoView.classList.add("hidden");
    gerenteView.classList.add("hidden");
  }

  // Manejo de navegación para cada botón
  btnCliente.addEventListener("click", () => {
    menuPrincipal.style.display = "none";
    hideAllViews();
    clienteView.classList.remove("hidden");
  });

  btnEmpleado.addEventListener("click", () => {
    menuPrincipal.style.display = "none";
    hideAllViews();
    empleadoView.classList.remove("hidden");
  });

  btnGerente.addEventListener("click", () => {
    menuPrincipal.style.display = "none";
    hideAllViews();
    gerenteView.classList.remove("hidden");
  });

  // Manejo del formulario de Cliente (se mantiene como antes)
  const formCliente = document.getElementById("formCliente");
  if (formCliente) {
    formCliente.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombreCliente = document.getElementById("nombreCliente").value;
      const apellidoCliente = document.getElementById("apellidoCliente").value;
      const ubicacionCliente = document.getElementById("ubicacionCliente").value;
      const emailCliente = document.getElementById("emailCliente").value;
      const telefonoCliente = document.getElementById("telefonoCliente").value;
      alert(
        `Pedido confirmado para:\nNombre: ${nombreCliente} ${apellidoCliente}\nUbicación: ${ubicacionCliente}\nEmail: ${emailCliente}\nTeléfono: ${telefonoCliente}`
      );
      formCliente.reset();
      clienteView.classList.add("hidden");
      menuPrincipal.style.display = "block";
    });
  }

  // Manejo del formulario de Empleado (nuevo)
  const formEmpleado = document.getElementById("formEmpleado");
  if (formEmpleado) {
    formEmpleado.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombreEmpleado = document.getElementById("nombreEmpleado").value;
      const ciEmpleado = document.getElementById("ciEmpleado").value;
      const sueldoEmpleado = document.getElementById("sueldoEmpleado").value;
      const cargoEmpleado = document.getElementById("cargoEmpleado").value;
      alert(
        `Empleado registrado:\nNombre: ${nombreEmpleado}\nCI: ${ciEmpleado}\nSueldo: ${sueldoEmpleado}\nCargo: ${cargoEmpleado}`
      );
      formEmpleado.reset();
      empleadoView.classList.add("hidden");
      menuPrincipal.style.display = "block";
    });
  }
});

