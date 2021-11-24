exports.up = async function (knex, Promise) {
  return knex.schema
    .createTable("faixa_etaria", (table) => {
      table.increments("id").primary();
      table.integer("de").notNull();
      table.integer("ate").notNull();
      table.string("descricao").notNull();
      table.timestamps(true, true);
    })
    .then(function () {
      return knex("faixa_etaria").insert([
        {
          de: 0,
          ate: 18,
          descricao: "Até 18 anos",
        },
        {
          de: 19,
          ate: 23,
          descricao: "De 19 a 23 anos",
        },
        {
          de: 24,
          ate: 28,
          descricao: "De 24 a 28 anos",
        },
      ]);
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("faixa_etaria");
};
