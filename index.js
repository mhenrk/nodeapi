const express = require("express")

const app = express()

app.get('/xxx', (req, res) => {
    res.status(200).json({
        message: 'Rota Válida'
    })
})

app.listen(5551, () => { console.log('vivo')})