const http = require('http');
const { readFileSync } = require('fs');

const homepage = readFileSync('./index.html');
const server = http.createServer( (req,res) => {
    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homepage)
        res.end()
    } else if (req.url === '/plain') {
        res.writeHead(200, {'content-type': 'text/text'})
        res.write(homepage)
        // res.writeHead(200, {'content-type': 'text/html'})
        // res.write(
        //     `Return to the correct site
        //     <a href='/'> Here </a>`
        // )
        res.end()
    }
    else {
        res.writeHead(500, {'content-type': 'text/html'})
        res.end(`
        <b>Invalid site</b>
        <a href='/'>Return to home</a>`)
    }
    
})

server.listen(5000);