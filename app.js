require("dotenv").config();

const express = require("express");

const animalesRoutes = require("./routes/animalesRoutes");
const refugiosRoutes = require("./routes/refugiosRoutes");
const caracteristicasRoutes = require("./routes/caracteristicasRoutes");

const logger = require("./middlewares/logger");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use("/uploads", express.static("uploads"));
app.use(express.static("public"));

app.use("/api/animales", animalesRoutes);
app.use("/api/refugios", refugiosRoutes);
app.use("/api/caracteristicas", caracteristicasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});