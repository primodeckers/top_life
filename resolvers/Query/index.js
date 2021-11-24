const usuario = require("./usuario");
const perfil = require("./perfil");
const plano = require("./plano");
const operadora = require("./operadora");
const faixaEtaria = require("./faixaEtaria");
const multiploReembolso = require("./multiploReembolso");

module.exports = {
  ...usuario,
  ...perfil,
  ...plano,
  ...operadora,
  ...faixaEtaria,
  ...multiploReembolso,
};
