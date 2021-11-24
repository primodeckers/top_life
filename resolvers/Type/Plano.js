const db = require("../../config/db");

module.exports = {
  operadora(plano) {
    // return db("operadora").where({ id: plano.operadora_id });
    return db("operadora").where({ id: plano.operadora_id });
  },

  faixa_etaria(plano) {
    return db("faixa_etaria").where({ id: plano.faixa_etaria_id });
  },

  multiplo_reembolso(plano) {
    return db("multiplo_reembolso").where({
      id: plano.multiplo_reembolso_id,
    });
  },
};
