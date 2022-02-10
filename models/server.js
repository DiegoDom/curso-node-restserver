const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        // Inicializamos express
        this.app = express();
        // Inicializamos el puerto que escucha el servidor
        this.port = process.env.PORT;
        // Definicion de rutas path
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();
        // Inicializamos las rutas
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio público
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port }`);
        });
    }

}

module.exports = Server;