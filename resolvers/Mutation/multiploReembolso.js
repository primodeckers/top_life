const db = require("../../config/db");
const {
  multiploReembolso: getMultiploReembolso,
} = require("../Query/multiploReembolso");

module.exports = {
  async novoMultiploReembolso(_, { dados }) {
    try {
      const [id] = await db("multiplo_reembolso").insert({ ...dados });
      return db("multiplo_reembolso").where({ id }).first();
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  },
  async excluirMultiploReembolso(_, args) {
    try {
      const multiploReembolso = await getMultiploReembolso(_, args);
      if (multiploReembolso) {
        const { id } = multiploReembolso;
        //await db("usuarios_perfis").where({ perfil_id: id }).delete(); fazer depois
        await db("multiplo_reembolso").where({ id }).delete();
      }
      return multiploReembolso;
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  },
  async alterarMultiploReembolso(_, { filtro, dados }) {
    try {
      const multiploReembolso = await getMultiploReembolso(_, { filtro });
      if (multiploReembolso) {
        const { id } = multiploReembolso;
        await db("multiplo_reembolso")
          .where({ id })
          .update({ ...dados });
      }
      return { ...multiploReembolso, ...dados };
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  },
};
