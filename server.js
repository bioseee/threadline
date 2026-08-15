import express from "express";

const PORT = 8000;

const app = express()

app.listen(PORT, ()=> `server listening on PORT: ${PORT}`)