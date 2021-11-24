const usuario = require("./usuario");
const perfil = require("./perfil");
const operadora = require("./operadora");
const multiploReembolso = require("./multiploReembolso");

module.exports = {
  ...usuario,
  ...perfil,
  ...operadora,
  ...multiploReembolso,
};
