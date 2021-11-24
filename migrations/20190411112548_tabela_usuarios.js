exports.up = async function (knex, Promise) {
  return knex.schema
    .createTable("usuarios", (table) => {
      table.increments("id").primary();
      table.string("nome").notNull();
      table.string("email").notNull().unique();
      table.string("senha", 60);
      table.boolean("ativo").notNull().defaultTo(true);
      table.timestamps(true, true);
    })
    .then(function () {
      return knex("usuarios").insert([
        {
          nome: "João Show da silva",
          email: "jshow@empresa.com.br",
          senha: "12345678",
        },
        {
          nome: "Jaime Lannister",
          email: "jlann@empresa.com.br",
          senha: "12345678",
        },
        {
          nome: "Gabriela T. Nunes",
          email: "gtnunes@empresa.com.br",
          senha: "12345678",
        },
      ]);
    });
};

exports.down = async function (knex, Promise) {
  return knex.schema.dropTable("usuarios");
};
