document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const listaComidas = document.getElementById("lista-comidas");

    
    function cargarComidas() {
        fetch("http://localhost:4001/comidas")
            .then(res => res.json())
            .then(data => {
                listaComidas.innerHTML = "";
                data.forEach(comida => {
                    const li = document.createElement("li");
                    li.textContent = `#${comida.posicion} - ${comida.nombre} (Valor: ${comida.valor})`;
                    listaComidas.appendChild(li);
                });
            })
            .catch(error => console.error("❌ Error al cargar comidas:", error));
    }

    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const posicion = document.getElementById("posicion").value;
        const nombre = document.getElementById("nombre").value;
        const valor = document.getElementById("valor").value;

        fetch("http://localhost:4001/registrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ posicion, nombre, valor })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.mensaje);
            formulario.reset();
            cargarComidas();
        })
        .catch(error => console.error("❌ Error al registrar:", error));
    });

    cargarComidas();
});
