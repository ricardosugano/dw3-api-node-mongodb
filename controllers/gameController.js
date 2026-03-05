//importando o service
import gameService from "../services/gameService.js";
//importando o ObjectId do MongoDB para validar o id
import {objectid} from "mongodb";

//Funçao para tratar a requisiçao de listar os jogos
const getAllGames = async (req, res) =>{
    try{
        const games = await gameService.getAll()
        res.status(200).json({games : games}) // cod.200 : Requisição feita com sucesso
    }catch(error){
        console.log(error)
        res.status(500).json({error : 'Erro interno do servidor'})
    }
}

// função para tratar a requiasição de CADASTRAR um jogo
const createGame = async(req, res) => {
    try{
        //Desestruturação
        // coletadno os dados do corpo da requisição
        const {title, platform, year, price} = req.body
        await gameService.Create(title, platform, year, price)
        //res.sendStatus(201) - usado para enviar apenas o status
        res.status(201).json({message: 'O jogo foi cadastrado com sucesso!'})
        // cod. 201 - CREATE - Um novo recurso foi criado no servidor
    }catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor. Não foi possivel cadastrar o jogo'})
    }
}

//função para deletar um jogo
const deleteGame = async (req, res) => {
    try{    
        //coletando o id do jogo a ser deletado da url (rota)
        const {id} = req.params.id

        //validação do id
        if(!objectid.isValid(req.params.id)){
            await gameService.delete(id)
            res.status(204).json({message: 'O jogo foi deletado com sucesso!'})
            //cod. 204 - No Content - A requisição foi bem sucedida, mas não há conteúdo para enviar na resposta
        }else{
            res.status(400).json({error: 'ID inválido'})
        }
        
    }catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor. Não foi possível deletar o jogo'})
    }
}
//função para alterar um jogo
const updateGame = async (req, res) => {
    try{
        const {id} = req.params.id

        if(!objectid.isValid(id)){
            const {title, platform, year, price} = req.body
            await gameService.update(id, title, platform, year, price)
            res.status(200).json({message: 'O jogo foi atualizado com sucesso!'})
        }else{
            res.status(400).json({error: 'Ocorreu um erro na validação da ID'})
        }

    }catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.'})
    }
}

export default { getAllGames, createGame, deleteGame, updateGame }