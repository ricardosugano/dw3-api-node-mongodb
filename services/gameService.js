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
    async Create(title, platform, year, price) {
        try{
            const newGame = new Game({
                //tecnica de desestruturação (destruction = forma sinplificada de escrever title: title)
                title,
                platform,
                year,
                price
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
    async update(id, title, platform, year, price) {
         try{
             await Game.findByIdAndUpdate(id, {
                 title,
                 platform,
                    year,
                    price
             })
                console.log(`game com a id: ${id} foi atualizado.`)
            } catch (error){
                console.log(error)
}}
}

//exportando a classe
export default new gameService()