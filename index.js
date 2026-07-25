let express = require('express')
let app = express()
// let http = require('http')
// let url = require('url')

// const server = http.createServer(app)

app.get('/', (req, res) => {
  res.send('HomePage')
})

app.get('/aboutUs', (req, res) => {
  res.send('about')
})

app.get('/contactUs', (req, res) => {
  res.send('0000-00000000')
})

// server.listen(8001, () => console.log('Server Started'))
app.listen(8001, console.log('Server Started'))

//! Does not need the commented stuff. Express handle all this by itself
