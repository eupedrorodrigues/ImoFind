const express = require('express');
import database from './database';

class App {
  constructor() {
    this.server = express();

    this.initializeDatabase();
    this.middlewares();
    // this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  // routes() {
  //   this.server.use(routes);
  // }


  async initializeDatabase() {
    try {
      await database.authenticate();
      console.log("Banco de dados conectado com sucesso!");
    } catch (error) {
      console.log("Erro ao conectar ao banco de dados: ", error.message);
    }
  }
}

export default new App().server;
