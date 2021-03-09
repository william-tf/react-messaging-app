const express = require("express")
const app = express()
const helmet = require("helmet")
const cors = require("cors")

app.use(express.json())
app.use(helmet())
app.use(cors())
app.get('/', (req, res) => {
    res.json({api:'do be up'})
})

module.exports = app