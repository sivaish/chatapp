var socket = io();

// Below are the two different declaration of the ES6 (arrow function) and normal function declaration

// socket.on('connect', () => {
//     console.log('connected to server')
// })

socket.on('connect', function () {
    console.log('connected to server')

    // custom Event emitter
    socket.emit('msgFrmClient', {
        frm: 'Client',
        msg: 'Thanks for connecting me!'
    })
})

socket.on('disconnect', function() {
    console.log('Disconnected from server')
})

// custom Listener Event
socket.on('welcomeMsgToClient', function (messageToClient) {
    console.log('msgFrmServer', messageToClient)
})

// custom Listener Event
socket.on('newMsg', function (messageToClients) {
    console.log('New Message', messageToClients)
})

