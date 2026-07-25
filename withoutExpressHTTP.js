const http = require('http')
const fs = require('fs')
const url = require('url')

fs.mkdir('logs', { recursive: true }, () => {})

const myServer = http.createServer((req, res) => {
  const log = `- ${req.url}: request received!\n`

  if (req.url === '/favicon.ico') return res.end()
  let myURL = url.parse(req.url, true)

  console.log(myURL)
  fs.appendFile('logs/logs.txt', log, (err) => {
    if (err) {
      res.statusCode = 500
      return res.end('Internal Server Error')
    }

    switch (myURL.pathname) {
      case '/':
        res.end('Homepage')
        break

      case '/about':
        res.end(`Hi ${myURL.query.name}`)
        break

      default:
        res.statusCode = 404
        res.end('Not Found 404')
    }
  })
})

myServer.listen(8001, () => {
  console.log('Server Running')
})
