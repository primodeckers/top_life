exports.up = async function (knex, Promise) {
  return knex.schema
    .createTable("plano", (table) => {
      table.increments("id").primary();
      table.string("nome").notNull();
      table.string("codigo_ans").notNull();
      table.string("descricao").notNull();

      // Enums
      table.string("segmentacao").notNull();
      table.string("abrangencia_geografica").notNull();
      table.string("acomodacao").notNull();
      table.string("coparticipacao").notNull();

      table.float("valor").notNull();

      table.integer("operadora_id").unsigned();
      table.foreign("operadora_id").references("operadora.id");

      table.integer("faixa_etaria_id").unsigned();
      table.foreign("faixa_etaria_id").references("faixa_etaria.id");

      table.integer("multiplo_reembolso_id").unsigned();
      table
        .foreign("multiplo_reembolso_id")
        .references("multiplo_reembolso.id");

      table.timestamps(true, true);
    })
    .then(function () {
      return knex("plano").insert([
        {
          nome: "Clássico Regional Brasília ADS I - E (EF)",
          descricao: "Descricao do plano",
          codigo_ans: "472.930/14-7",
          segmentacao: "Ambulatorial + Hospitalar com obstetricia",
          abrangencia_geografica: "NACIONAL",
          acomodacao: "COLETIVA",
          valor: 573.3,
          coparticipacao: "SIM",
          operadora_id: 1,
          faixa_etaria_id: 1,
          multiplo_reembolso_id: 1,
        },
        {
          nome: "Bradesco Saúde Efetivo IV E CA 6",
          descricao: "Descricao do plano do bradesco",
          codigo_ans: "484.408/19-4",
          segmentacao: "Ambulatorial + Hospitalar com obstetricia",
          abrangencia_geografica: "NACIONAL",
          acomodacao: "INDIVIDUAL",
          valor: 479.82,
          coparticipacao: "NAO",
          operadora_id: 2,
          faixa_etaria_id: 2,
          multiplo_reembolso_id: 2,
        },
        {
          nome: "Clássico Regional Brasília ADS - E (EF)",
          descricao: "Descricao do plano do Unimede",
          codigo_ans: "483.277/19-9",
          segmentacao: "Ambulatorial + Hospitalar com obstetricia",
          abrangencia_geografica: "MUNICIPAL",
          acomodacao: "COLETIVA",
          valor: 410.71,
          coparticipacao: "NAO",
          operadora_id: 3,
          faixa_etaria_id: 3,
          multiplo_reembolso_id: 3,
        },
      ]);
    });
};

exports.down = async function (knex, Promise) {
  return knex.schema.dropTable("plano");
};
