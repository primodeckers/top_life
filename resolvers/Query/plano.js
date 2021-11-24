const db = require("../../config/db");

module.exports = {
  planos(parent, args) {
    const result = db("plano");
    // console.log(result);
    return result;
  },
  plano(_, { filtro }) {
    if (!filtro) return null;
    const { id, nome } = filtro;
    if (id) {
      return db("plano").where({ id }).first(); // para unique
    } else if (nome) {
      return db("plano").where({ nome }).first(); // para unique
    } else {
      return null;
    }
  },
};
