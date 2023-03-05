const express = require("express")

const app = express()

app.get('/xxx', (req, res) => {
    res.status(200).json({
        message: 'Rota Válida'
    })
})

app.listen(8081, () => { console.log('vivo')})