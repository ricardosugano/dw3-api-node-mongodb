//importando o service
import gameService from "../services/gameService.js";

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

export default { getAllGames, createGame }
