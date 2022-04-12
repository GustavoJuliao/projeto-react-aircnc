const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const app = express();

mongoose.connect("mongodb+srv://gustavo:httyThbh2b4uUeSI@aircnc-test.yppsq.mongodb.net/AirCNCdb?retryWrites=true&w=majority");

// GET (buscar), POST (cadastro) (navegador não recebe), PUT (editar), DELETE (deletar)

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisicao (para criação, edição)

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));



app.listen(3333);
