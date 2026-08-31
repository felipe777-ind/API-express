import express from 'express'

const app = express()
const PORTA = 3000

const usuarios = [
    {id: 1, nome:'Elder'},
    {id: 2, nome:'Gabriela'},
    {id: 3, nome:'Otaviana'}
]

app.get('/', (req, res)=> {
    res.send('Bem-vindo ao Express!') // enviar um arquivo de texto(send)
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
})

app.post('/usuario', () => {
    const novoUsuario = {
        id: usuarios.length +1,
        nome: 'Lucas'
    }
    usuarios.push(novoUsuarios);
    res.status(201).json(novoUsuario);
})

app.get('/usuarios/id:', (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find(u => u.id === parseInt(id));
    if(!usuario){
        return res.status().json({error: "Usuario nao encontrado!"})
    }
    res.json(usuario)
})
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
});
