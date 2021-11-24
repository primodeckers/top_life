exports.up = async function (knex, Promise) {
  return knex.schema
    .createTable("multiplo_reembolso", (table) => {
      table.increments("id").primary();
      table.string("nome").notNull().unique();
      table.float("multiplicador").notNull();
      table.timestamps(true, true);
    })
    .then(function () {
      return knex("multiplo_reembolso").insert([
        {
          nome: "Até 1,5 vez a tabela Amil",
          multiplicador: 1.5,
        },
        {
          nome: "Uma vez",
          multiplicador: 1,
        },
        {
          nome: "2 vezes a tabela CNU",
          multiplicador: 2,
        },
      ]);
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("multiplo_reembolso");
};
