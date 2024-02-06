import Sequelize from "sequelize";

import User from "../app/models/User";
import Product from "../app/models/Product";
import Category from "../app/models/Category";

import mongoose from "mongoose";

import configDatabase from "../config/database";

const models = [User, Product, Category];
// const models = [User, Product];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(
      "postgresql://postgres:-3A64gab*-aAefe*b5f*34f21AD-f4GB@viaduct.proxy.rlwy.net:22799/railway"
    );
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb://mongo:CC2dG-eaCbBCg2eABeFffAHaDCeDe2Ff@viaduct.proxy.rlwy.net:11167",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
