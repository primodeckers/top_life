exports.up = async function (knex, Promise) {
  return knex.schema
    .createTable("operadora", (table) => {
      table.increments("id").primary();
      table.string("nome").notNull().unique();
      table.string("rotulo").notNull();
      table.string("descricao").notNull();
      table.timestamps(true, true);
    })
    .then(function () {
      return knex("operadora").insert([
        {
          nome: "Amil",
          rotulo: "amil",
          descricao: "operadora de planos de saude",
        },
        {
          nome: "Bradesco",
          rotulo: "bradesco",
          descricao: "operadora de planos de saude",
        },
        {
          nome: "SaudeSim",
          rotulo: "saudesim",
          descricao: "operadora de planos de saude",
        },
      ]);
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("operadora");
};
