const db = require("../../config/db");

module.exports = {
  multiplosReembolsos() {
    return db("multiplo_reembolso");
  },
  multiploReembolso(_, { filtro }) {
    if (!filtro) return null;
    const { id, nome } = filtro;
    if (id) {
      return db("multiplo_reembolso").where({ id }).first(); // para unique
    } else if (nome) {
      return db("multiplo_reembolso").where({ nome }).first(); // para unique
    } else {
      return null;
    }
  },
};
