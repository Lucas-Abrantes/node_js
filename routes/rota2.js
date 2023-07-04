module.exports = (app)=>{
    app.get('/users', (req, res)=>{
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.json({
            nome: ['lucas', 'abrantes'],
            idade: [25],
            id: 1
        });
    });


    app.get('/users/admin', (req, res)=>{
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.json({
            nome: []
        });
    });
};