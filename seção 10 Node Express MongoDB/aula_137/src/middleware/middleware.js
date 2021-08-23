// module.exports = (req, res, next) => {
//     next()
// }
//todo =====================================================
//?     Outra maneira
//?     vai ter que mudar o nome onde está sendo chamado
exports.middlewareGlobal = (req, res, next) => {
    next()
}

exports.outroMiddleware = (req, res, next) => {
    console.log('SOU SEU OUTRO MIDDLEWARE')
    next()
}