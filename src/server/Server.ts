import express from "express";

const server = express();

// Tipagem explícita de req e res para evitar problemas com sobrecargas
server.get("/", (req, res) => {
    res.send("Olá mundo!");
});

export { server };
