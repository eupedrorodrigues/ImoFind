import { Sequelize } from "sequelize";
import config from "../config/database"


class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);
  }
}

export default new Database();