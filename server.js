const express = require('express');
const path = require('path')
require('dotenv').config();

const PORT = process.env.PORT || 7000

const app = express();

app.use(express.json())

app.use(express.static('client/build'))

app.get('/portfolio', (_, res) => {
    res.send({
        msg: 'Coucou tout le monde'
    })
})
app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
});