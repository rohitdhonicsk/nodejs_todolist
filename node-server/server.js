const http=require('http')
const server=http.createServer(function(req,res){
  res.writeHead(200,{'Content-Tyoe': 'text/html'})//sent headers
  res.write('<h1>hello world</h1>')
  res.end();
})
server.listen(8080);