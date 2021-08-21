exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="qualquercoisa">
    Outro compo: <input type="text" name="aquioutrocampo">
    <button>Olá mundo</button>
    </form>
    `)
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua novarota de POST.')
}