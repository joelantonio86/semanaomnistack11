const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);



/**
 *  Rota / Recursos
 */

 /** 
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do Back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * 
   * Tpos de parâmetros
   * Query Params: Parametros nomeados enviados na rota após o simbolo de '?' (filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
   * Request
   * 
   */

   /**
    * 
    * Driver: SELECT * FROM users
    * Query Bulider
    * 
    */


