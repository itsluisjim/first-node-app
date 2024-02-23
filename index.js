const http = require('node:http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const path = req.url;

    let file = '';

    switch(path){
        case '/':
            file = 'index.html';
            break;
        case '/about':
            file = 'about.html';   
            break;
        case '/contact':
            file = 'contact.html';
            break;
        default:
            file = '404.html';
    }


    fs.readFile(file, function(err, data) {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("Something is really broken.");
        }

        if(file == '404.html'){
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
        }
        res.write(data);
        return res.end();
      });

})

server.listen(8000);