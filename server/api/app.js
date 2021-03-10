const express = require("express")
const app = express()
const helmet = require("helmet")
const cors = require("cors")
const userRouter = require('./users/users-router')
const groupRouter = require('./groups/groups-router')
const messageRouter = require('./messages/messages-router')


app.use(express.json())
app.use(helmet())
app.use(cors())
app.get('/', (req, res) => {
    res.json({api:'do be up'})
})
app.use('/users', userRouter)
app.use('/groups', groupRouter)
app.use('/messages', messageRouter)



module.exports = app
