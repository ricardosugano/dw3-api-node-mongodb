import mongoose from "mongoose";


//o campo description é um campo aninhado, ou seja, ele é um objeto dentro do documento

const descriptionSchema = new mongoose.Schema({
    genre: String, //genero
    plataform: String, //plataforma
    rating: String, //lassificação de idade

})


const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,

    //definindo o campo como array
    description: descriptionSchema
});

const Game = mongoose.model('Game', gameSchema)

export default Game;