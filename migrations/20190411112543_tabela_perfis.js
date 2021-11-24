exports.up = async function (knex, Promise) {
  return knex.schema
    .createTable("perfis", (table) => {
      table.increments("id").primary();
      table.string("nome").notNull().unique();
      table.string("rotulo").notNull();
      table.timestamps(true, true);
    })
    .then(function () {
      return knex("perfis").insert([
        { nome: "comum", rotulo: "Comum" },
        { nome: "admin", rotulo: "Administrador" },
        { nome: "master", rotulo: "Master" },
      ]);
    });
};

exports.down = async function (knex, Promise) {
  return knex.schema.dropTable("perfis");
};
