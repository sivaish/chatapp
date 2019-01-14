const path = require('path')
const express = require('express')

var publicPath = path.join(__dirname, '../public')
var app = express()
const port = process.env.PORT || 80

// this is used to configure the express app middleware
app.use(express.static(publicPath))

app.listen(port, () => {
    console.log(`Server is up and running in the PORT ${port}`)
})

console.log(__dirname + '/../public')
console.log(publicPath)