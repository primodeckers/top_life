const db = require("../../config/db");

module.exports = {
  operadoras() {
    return db("operadora");
  },
  operadora(_, { filtro }) {
    if (!filtro) return null;
    const { id, nome } = filtro;
    if (id) {
      return db("operadora").where({ id }).first(); // para unique
    } else if (nome) {
      return db("operadora").where({ nome }).first(); // para unique
    } else {
      return null;
    }
  },
};
