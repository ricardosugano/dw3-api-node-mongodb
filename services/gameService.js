//importando o Model
import Game from "../models/Games.js";

class gameService {
    // metodo (servio) para buscar todos os registro no banco
    // funções assincronas são nao bloqueantes
    async getAll(){ // funçoes assincronas são não bloqueates
        try{ // try trata o sucesso
            const games = await Game.find(); // .find é motodo do mongoose para viscar reigistro no bd
            return games;
        } catch (error) { // catch trata a falha
            console.log(error)
        }
    }

    // método para cadastrar um game
    async Create(title, year, price, descriptions) {
        try{
            const newGame = new Game({
                //tecnica de desestruturação (destruction = forma sinplificada de escrever title: title)
                title,
                platform,
                year,
                price,
                descriptions
            })
            await newGame.save() // .save()metodo do Mongose para cadastar no BD
        } catch (error){
            console.log(error)
        }
    }
    //método para excluir um jogo
    async delete(id){
        try{
            //excluindo o jogo pelo id
            await Game.findByIdAndDelete(id) 
            console.log(`game com a id: ${id} foi deletado.`)
        } catch (error){
            console.log(error)
        }
    }
    //metodo para alterar um jogo
    async update(id, title, year, price, descriptions) {
         try{
            const updatedGame = await Game.findByIdAndUpdate(id, {
                title,
                year,
                price,
                descriptions
             },

             {new: true} // opção para retornar o documento atualizado         
            )
                console.log(`game com a id: ${id} foi atualizado.`)
                return updatedGame
            } catch (error){
                console.log(error)
}}
//metodo para buscar um jogo único
async getOneGame(id){
    try{
        const game = await Game.findOne({ _id: id }) // .findOne é um metodo do mongoose para buscar um registro no BD, passando o id como parametro
        return game
}   catch (error){
        console.log(error)
}}
}

//exportando a classe
export default new gameService();