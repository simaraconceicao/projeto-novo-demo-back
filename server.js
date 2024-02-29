const express = require('express') //trazendo funcionalidades do express
const cors = require('cors') //trazendo funcionalidades do cors
const connectDatabase = require('./database') //importou conexao

const app = express() // instanciando o express (segunda etapa de configurar o express)
const PORTA = 3333 // criando a constante Porta pra guardar a informação
app.use(cors()) //instanciando o cors e terminando a configuração pra liberar a api ser integrada pelo nosso front

connectDatabase() //criou instancia da conexao do banco
app.use(express.json()) // dizendo que o tipo de dado que minha api permite enviar é JSON

const router = require('./route')
app.use('/', router)

app.listen(PORTA, console.log(`Rodando servidor na porta: ${PORTA}`)) //ligando o servidor
