const http = require('http')
const server = http.createServer((req, res)=>{
// req represent incomcimg request
// res represent response
if(req.url === '/'){
    res.end("Welcome to our main page")
}
if(req.ulr === '/about'){
    res.end("Welcome to about section")
}
res.end(`<h1>OOPS!!</h1>
<p>We cant seen to find the page</p>
<a href = "/"> GO HOME </a>`)
// res.write('Hello there , its my new HTTP SEVRVER')
// res.end()

})
server.listen(5000)