const db = require('../../config/db')

module.exports = {
    perfis(parent, args, context) {
        context && context.validarAdmin()
        return db('perfis')
    },
    perfil(_, { filtro }, context) {
        context && context.validarAdmin()
        if(!filtro) return null
        const { id, nome } = filtro
        if(id) {
            return db('perfis')
                .where({ id })
                .first()  // para unique                  
        } else if(nome) {
            return db('perfis')
                .where({ nome })
                .first()   // para unique
        } else {
            return null
        }
    }
}