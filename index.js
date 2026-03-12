import express from "express";
//importando o mongoose
import mongoose from 'mongoose';
//importando o model
import Game from "./models/Games.js"
//importando as rotas(Routes)
import gameRoutes from "./routes/gameRoutes.js";

const app  = express();

// Configurações do express
app.use(express.json()) // permite o uso de json na aplicão

//Ativando a utilização das rotas
app.use("/", gameRoutes)    

//iniciando a conexão com o banco mongodb
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games-novo")

// app.get("/", (req, res) =>{
//     const games = [
//         {
//             Title: "Game 1",
//             year: "2000",
//             plataform: "PC",
//             price: 20
//         },
//         {
//             Title: "Game 2",
//             year: "2024",
//             plataform: "XBOX",
//             price: 30
//         },
//     ];
//     res.status(200).json(games)
// });

// Rodando a api na port 4000
const port = 4000;
app.listen(port, (error) =>{
    if (error){
        console.log(error)
    }else {
        console.log(`API rodando em http://localhost:${port}`)
    }
})