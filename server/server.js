const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

var publicPath = path.join(__dirname, '../public')

const port = process.env.PORT || 3000

var app = express()
var server = http.createServer(app)
var io = socketIO(server)

// this is used to configure the express app middleware
app.use(express.static(publicPath))

// Register an client event - Where the Client and Server Events are accessed here
io.on('connection', (socket) => {
    console.log('New user client connected')

    // connection listener
    socket.on('disconnect', () => {
        console.log('User client disconnected')
    })

    // custom event emit
    socket.emit('welcomeMsgToClient', {
        frm: 'Server',
        msg: 'Welcome to Chat app - Share your thoughts here'
    })

    // custom event listener
    socket.on('msgFrmClient', (msgFrmClient) => {
        console.log('Msg:', msgFrmClient)
        io.emit('newMsg', {
            frm: msgFrmClient.frm,
            msg: msgFrmClient.msg,
            createdAt: new Date().getTime()
        })
    })
    
})

server.listen(port, () => {
    console.log(`Server is up and running in the PORT ${port}`)
})
