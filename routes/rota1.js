module.exports = (app)=>{
    app.get('/', (req, res)=>{
        res.statusCode = 200;
        // alterar o formato do texto
        //exibir um html para o usuário
        res.setHeader('content-type', 'text/html');
        res.end('<h1>Servidor ok</h1>');
    });
    
};