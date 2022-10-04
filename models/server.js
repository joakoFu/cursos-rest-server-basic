const express = require('express')
require('dotenv').config()

class Server{
    constructor(){
        this.app = express();
        this.usuariosPath = '/api/usuarios';
        this.port = process.env.PORT;
        //Middeleware
        this.middleware()
        //Ruta de la aplicacion 
        this.routes();

    }

    middleware(){
        this.app.use(express.static('public'));
        //lectura y parseo del body
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          });
    }
    

}

module.exports = Server;