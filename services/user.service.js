const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres')

const {models} = require('./../libs/sequelize.js')

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await models.User.findAll();

    return rta;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
