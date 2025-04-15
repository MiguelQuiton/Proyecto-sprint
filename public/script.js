document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los botones de la pantalla principal y vistas
  const btnCliente = document.getElementById("btnCliente");
  const btnGerente = document.getElementById("btnGerente");

  const menuPrincipal = document.getElementById("menuPrincipal");
  const clienteView = document.getElementById("clienteView");

  // Vistas de Gerente
  const gerenteLoginView = document.getElementById("gerenteLoginView");
  const formGerenteLogin = document.getElementById("formGerenteLogin");
  const gerenteDashboard = document.getElementById("gerenteDashboard");
  const btnRegistrarPlato = document.getElementById("btnRegistrarPlato");
  const btnRegistrarEmpleado = document.getElementById("btnRegistrarEmpleado");
  const btnArea = document.getElementById("btnArea"); // Placeholder sin funcionalidad
  const registrarPlatoView = document.getElementById("registrarPlatoView");
  const registrarEmpleadoView = document.getElementById("registrarEmpleadoView");

  // Función para ocultar todas las vistas de gerente
  function hideGerenteViews() {
    gerenteLoginView.classList.add("hidden");
    gerenteDashboard.classList.add("hidden");
    registrarPlatoView.classList.add("hidden");
    registrarEmpleadoView.classList.add("hidden");
  }

  // Navegación principal: Cliente y Gerente
  btnCliente.addEventListener("click", () => {
    menuPrincipal.style.display = "none";
    clienteView.classList.remove("hidden");
  });

  btnGerente.addEventListener("click", () => {
    menuPrincipal.style.display = "none";
    hideGerenteViews();
    gerenteLoginView.classList.remove("hidden");
  });

  // Manejo del formulario de Cliente (igual que antes)
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

  // Manejo del formulario de Login para Gerente
  if (formGerenteLogin) {
    formGerenteLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const usuarioGerente = document.getElementById("usuarioGerente").value;
      const contrasenaGerente = document.getElementById("contrasenaGerente").value;
      // Validación simple (usuario: gerente, contraseña: 1234)
      if (usuarioGerente === "gerente" && contrasenaGerente === "1234") {
        alert("Login exitoso");
        formGerenteLogin.reset();
        gerenteLoginView.classList.add("hidden");
        gerenteDashboard.classList.remove("hidden");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  }

  // Dentro del Panel de Gerente: navegación para Registrar Platos y Registrar Empleado
  if (btnRegistrarPlato) {
    btnRegistrarPlato.addEventListener("click", () => {
      hideGerenteViews();
      gerenteDashboard.classList.remove("hidden");
      registrarPlatoView.classList.remove("hidden");
    });
  }

  if (btnRegistrarEmpleado) {
    btnRegistrarEmpleado.addEventListener("click", () => {
      hideGerenteViews();
      gerenteDashboard.classList.remove("hidden");
      registrarEmpleadoView.classList.remove("hidden");
    });
  }

  // (El botón "Área" queda como placeholder sin funcionalidad)

  // Manejo del formulario de Registro de Platos
  const formPlato = document.getElementById("formPlato");
  if (formPlato) {
    formPlato.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombrePlato = document.getElementById("nombrePlato").value;
      const descripcionPlato = document.getElementById("descripcionPlato").value;
      const precioPlato = document.getElementById("precioPlato").value;
      const disponiblePlato = document.getElementById("disponiblePlato").checked;
      fetch("http://localhost:4001/registrarPlato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombrePlato,
          descripcionPlato,
          precioPlato,
          disponiblePlato,

        })
      })
        .then(res => res.json())
        .then(data => {
          alert(data.mensaje);
          formPlato.reset();
          RegistrarPlatoView.classList.add("hidden");
          menuPrincipal.style.display = "block";
        })
        .catch(error => {
          console.error("❌ Error al registrar plato:", error);
          alert("❌ Error al registrar empleado");
        });
      alert(
        `Plato registrado:\nNombre: ${nombrePlato}\nDescripción: ${descripcionPlato}\nPrecio: ${precioPlato}\nDisponible: ${disponiblePlato ? "Sí" : "No"}`
      );
      formPlato.reset();
      registrarPlatoView.classList.add("hidden");
      gerenteDashboard.classList.remove("hidden");
    });
  }

  // Manejo del formulario de Registro de Empleado
  const formEmpleado = document.getElementById("formEmpleado");
  if (formEmpleado) {
    formEmpleado.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombreEmpleado = document.getElementById("nombreEmpleado").value;
      const apellidoEmpleado = document.getElementById("apellidoEmpleado").value;
      const ciEmpleado = document.getElementById("ciEmpleado").value;
      const celEmpleado = document.getElementById("celEmpleado").value;
      const cargoEmpleado = document.getElementById("cargoEmpleado").value;
      const sueldoEmpleado = document.getElementById("sueldoEmpleado").value;
      fetch("http://localhost:4001/registrarEmpleado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombreEmpleado,
          apellidoEmpleado,
          ciEmpleado,
          celEmpleado,
          cargoEmpleado,
          sueldoEmpleado
        })
      })
        .then(res => res.json())
        .then(data => {
          alert(data.mensaje);
          formEmpleado.reset();
          empleadoView.classList.add("hidden");
          menuPrincipal.style.display = "block";
        })
        .catch(error => {
          console.error("❌ Error al registrar empleado:", error);
          alert("❌ Error al registrar empleado");
        });
      alert(
        `Empleado registrado:\nNombre: ${nombreEmpleado} ${apellidoEmpleado}\nCI: ${ciEmpleado}\nCel: ${celEmpleado}\nCargo: ${cargoEmpleado}\nSueldo: ${sueldoEmpleado}`
      );
      formEmpleado.reset();
      registrarEmpleadoView.classList.add("hidden");
      gerenteDashboard.classList.remove("hidden");
    });
  }
  
  function verificarCodigoGerente() {
    const codigo = document.getElementById("codigoGerente").value.trim();
    const resultado = document.getElementById("resultadoVerificacionGerente");
  
    fetch("/verificar-codigo-gerente", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ codigo })
    })
      .then(res => res.json())
      .then(data => {
        resultado.textContent = data.mensaje;
        resultado.style.color = data.valido ? "green" : "red";
  
        if (data.valido) {
          document.getElementById("gerenteDashboard").classList.remove("hidden");
        }
      })
      .catch(err => {
        resultado.textContent = "❌ Error de conexión.";
        resultado.style.color = "red";
      });
  }

});
