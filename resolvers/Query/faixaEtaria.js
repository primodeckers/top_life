const db = require("../../config/db");

module.exports = {
  faixasEtarias() {
    return db("faixa_etaria");
  },
  faixaEtaria(_, { filtro }) {
    if (!filtro) return null;
    const { id, descricao } = filtro;
    if (id) {
      return db("faixa_etaria").where({ id }).first(); // para unique
    } else if (descricao) {
      return db("faixa_etaria").where({ descricao }).first(); // para unique
    } else {
      return null;
    }
  },
};
