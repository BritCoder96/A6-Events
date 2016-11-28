var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080

// Add more movies! (For a technical challenge, use a file, or even an API!)

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

 switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/index.html', 'text/html', 200)
      break
    case '/index.html':
      sendFile(res, 'public/index.html', 'text/html', 200)
      break
    case '/css/style.css':
      sendFile(res, 'public/css/style.css', 'text/css', 200)
      break
    case '/README.md':
      sendFile(res, 'README.md', 'text/markdown', 200)
      break
    case '/js/scripts.js':
      sendFile(res, 'public/js/scripts.js', 'text/javascript', 200)
      break
    case '/Victory.wav':
      sendFile(res, 'public/music/Victory.wav', 'audio/wav', 200)
      break
    default:
      sendFile(res, 'public/404.html', 'text/html', 404)
  }

})

server.listen(process.env.PORT || port)
console.log('listening on 8080')

function sendFile(res, filename, type, code) {
  fs.readFile(filename, function(error, content) {
    res.writeHead(code, {'Content-type': type})
    res.end(content, 'utf-8')
  })
}