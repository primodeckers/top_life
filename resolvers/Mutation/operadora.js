const db = require("../../config/db");
const { operadora: getOperadora } = require("../Query/operadora");

module.exports = {
  async novaOperadora(_, { dados }) {
    try {
      const [id] = await db("operadora").insert({ ...dados });
      return db("operadora").where({ id }).first();
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  },
  async excluirOperadora(_, args) {
    try {
      const operadora = await getOperadora(_, args);
      if (operadora) {
        const { id } = operadora;
        //await db("usuarios_perfis").where({ perfil_id: id }).delete(); fazer depois
        await db("operadora").where({ id }).delete();
      }
      return operadora;
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  },
  async alterarOperadora(_, { filtro, dados }) {
    try {
      const operadora = await getOperadora(_, { filtro });
      if (operadora) {
        const { id } = operadora;
        await db("operadora")
          .where({ id })
          .update({ ...dados });
      }
      return { ...operadora, ...dados };
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  },
};
