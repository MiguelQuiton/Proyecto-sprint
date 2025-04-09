document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos de la interfaz
    const btnCliente = document.getElementById("btnCliente");
    const menuPrincipal = document.getElementById("menuPrincipal");
    const clienteView = document.getElementById("clienteView");
    const formCliente = document.getElementById("formCliente");
  
    // Al hacer clic en el botón "Cliente", se oculta el menú principal y se muestra la vista del cliente
    btnCliente.addEventListener("click", () => {
      menuPrincipal.style.display = "none";
      clienteView.classList.remove("hidden");
    });
  
    // Manejo del envío del formulario de cliente
    formCliente.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Obtener valores de los campos
      const nombreCliente = document.getElementById("nombreCliente").value;
      const apellidoCliente = document.getElementById("apellidoCliente").value;
      const ubicacionCliente = document.getElementById("ubicacionCliente").value;
      const emailCliente = document.getElementById("emailCliente").value;
      const telefonoCliente = document.getElementById("telefonoCliente").value;
  
      // Por ahora, simplemente mostramos un mensaje de confirmación
      // En sprints futuros se conectará a la BD para guardar estos datos
      alert(
        `Pedido confirmado para:\n` +
        `Nombre: ${nombreCliente} ${apellidoCliente}\n` +
        `Ubicación: ${ubicacionCliente}\n` +
        `Email: ${emailCliente}\n` +
        `Teléfono: ${telefonoCliente}`
      );
  
      // Opcional: Reiniciar el formulario y volver al menú principal
      formCliente.reset();
      clienteView.classList.add("hidden");
      menuPrincipal.style.display = "block";
    });
  });
  
