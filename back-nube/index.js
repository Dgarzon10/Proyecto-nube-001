const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Importa el paquete cors
const pool = require("./db");
const PORT = 3001;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Habilita CORS
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM tasks");
    res.json(data.rows);
  } catch (error) {
    console.error("Error al obtener datos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Crear un nuevo producto
app.post("/", async (req, res) => {
  try {
    const { content } = req.body;
    const done = false;
    const newTask = await pool.query(
      "INSERT INTO tasks (content, done) VALUES ($1, $2) RETURNING *",
      [content, done]
    );
    res.json(newTask.rows[0]);
  } catch (error) {
    console.error("Error al crear el Todo:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
// Actualizar un producto por su ID
app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const done = true;
    const updateTask = await pool.query(
      "UPDATE tasks SET done = $1 WHERE id = $2 RETURNING *",
      [done, id]
    );

    if (updateTask.rowCount === 0) {
      return res.status(404).json({ mensaje: "Tarea no encontrado" });
    }

    res.json(updateTask.rows[0]);
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Eliminar un producto por su ID
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await pool.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING *",
      [id]
    );

    if (deletedTask.rowCount === 0) {
      return res.status(404).json({ mensaje: "Tarea no encontrado" });
    }

    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar la Tarea:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Express funcionando en el puerto ${PORT}`);
});
