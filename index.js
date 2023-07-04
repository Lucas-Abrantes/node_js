// requisições http
const express = require('express');
//const routesIndex1 = require('./routes/rota1.js');
//const routesIndex2 = require('./routes/rota2.js');

//agora eu consigo ler/requisitar todas as rotas dentro do meu arquivo
const consign = require('consign');

let app = express();

//dizer que vai utilizar aquelas rotas
//app.use(routesIndex1);
//app.use(routesIndex2);

//incluir rotas no meu app
consign().include('routes').into(app);



// escutar o meu servidor
app.listen(3000, '127.0.0.1', ()=>{
    console.log(`Servidor funcionando na porta 3000`);
})
