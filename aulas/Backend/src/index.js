const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* Mtodos HTTP:
*GET: buscar / listar uma informação do back end
*POST : criar uma informção no backend
*PUT: alterar uma informação no back-end
*DELETE: Deletar uma infromação  no back end 
*/

/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeados  enviados  na rota após o '?' servem para (filtros, paginaçao)
 * Route Params: Parametros utilizados para identificar recursos 
 * Request Body 
 */



app.listen(3333);
