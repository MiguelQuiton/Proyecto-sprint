const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

console.log("🔄 Iniciando server.js...");

const app = express();
app.use(express.json());
app.use(cors());


app.use(express.static(path.join(__dirname, "public")));

const conexion = mysql.createConnection({
    host: "98.85.86.196",
    user: "chosko",
    password: "choskito_sisinfo_2",
    database: "sis_info_dos"
});

conexion.connect(err => {
    if (err) {
        console.error("❌ Error de conexión a MySQL:", err);
        return;
    }
    console.log("✅ Conectado a MySQL");
});


app.get("/comidas", (req, res) => {
    conexion.query("SELECT * FROM comidas", (err, resultados) => {
        if (err) {
            console.error("❌ Error al obtener datos:", err);
            res.status(500).json({ mensaje: "Error al obtener datos" });
            return;
        }
        res.json(resultados);
    });
});


app.post("/registrar", (req, res) => {
    console.log("📩 Datos recibidos:", req.body);

    const { posicion, nombre, valor } = req.body;


    conexion.query("SELECT * FROM comidas WHERE nombre = ?", [nombre], (err, resultados) => {
        if (err) {
            console.error("❌ Error en la consulta:", err);
            res.status(500).json({ mensaje: "Error en la consulta" });
            return;
        }
        if (resultados.length > 0) {
            console.log("⚠️ Registro duplicado:", nombre);
            res.json({ mensaje: "⚠️ No se puede registrar porque ya existe" });
        } else {
            // Insertar el nuevo plato
            conexion.query(
                "INSERT INTO comidas (posicion, nombre, valor) VALUES (?, ?, ?)",
                [posicion, nombre, valor],
                (err, resultado) => {
                    if (err) {
                        console.error("❌ Error al registrar:", err);
                        res.status(500).json({ mensaje: "Error al registrar" });
                        return;
                    }
                    console.log("✅ Registrado:", { posicion, nombre, valor });
                    res.json({ mensaje: "✅ Registrado exitosamente" });
                }
            );
        }
    });
});
app.post("/registrar", (req, res) => {
    console.log("📩 Datos recibidos:", req.body);

    const { nombreEmpleado, apellidoEmpleado, ciEmpleado, celEmpleado, cargoEmpledo, sueldoEmpleado } = req.body;


    conexion.query("SELECT * FROM Empleados WHERE nombre = ?", [nombre], (err, resultados) => {
        if (err) {
            console.error("❌ Error en la consulta:", err);
            res.status(500).json({ mensaje: "Error en la consulta" });
            return;
        }
        if (resultados.length > 0) {
            console.log("⚠️ Registro duplicado:", nombre);
            res.json({ mensaje: "⚠️ No se puede registrar porque el empleado ya existe" });
        } else {
            // Insertar el nuevo empleado
            conexion.query(
                "INSERT INTO Empleado (nombreEmpleado,apellidoEmpleado, ciEmpleado,celEmpleado, cargoEmpledo,sueldoEmpleado) VALUES (?, ?, ?)",
                [nombreEmpleado, apellidoEmpleado, ciEmpleado, celEmpleado, cargoEmpledo, sueldoEmpleado],
                (err, resultado) => {
                    if (err) {
                        console.error("❌ Error al registrar:", err);
                        res.status(500).json({ mensaje: "Error al registrar" });
                        return;
                    }
                    console.log("✅ Registrado:", { posicion, nombre, valor });
                    res.json({ mensaje: "✅ Registrado exitosamente" });
                }
            );
        }
    });
});

app.listen(4001, () => console.log("🚀 Servidor corriendo en http://localhost:4001"));








