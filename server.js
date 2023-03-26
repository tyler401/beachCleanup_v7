const http = require('http');
const fs = require('fs');
const port = 1337;

function serveStaticFile(path, response) {
    let contentType = 'text/html';
  
    if (path.endsWith('.css')) {
      contentType = 'text/css';
    }
    else if (path.endsWith('.png')) {
      contentType = 'image/png';
    }
    else if (path.endsWith('.js')) {
      contentType = 'text/css';
    }
    else if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
      contentType = 'image/jpeg';
    }
    else if (path.endsWith('.gif')) {
        contentType = 'image/gif';
      }
    else if (path.endsWith('.webp')) {
        contentType = 'image/webp';
     }
     else if (path.endsWith('.json')) {
      contentType = 'text/css';
   }

  
  
    fs.readFile(path, function(error, data) {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('500 - Internal Server Error');
      }
      else {
        response.writeHead(200, {'Content-Type': contentType});
        response.end(data);
      }
    });
  }
  

http.createServer((request, response) => {
  const url = request.url.toLowerCase().split('?')[0].replace(/\/$/, '');

  switch (url) {
    case '':
      serveStaticFile('public/index.html', response);
      break;
    case '/index':
     serveStaticFile('public/index.html', response);
        break;
    case '/about':
      serveStaticFile('public/about.html', response);
      break;
    case '/events':
      serveStaticFile('public/events.html', response);
      break;
    case '/get-involved':
      serveStaticFile('public/get-involved.html', response);
      break;
    case '/styles/hpstyles.css':
      serveStaticFile('public/css/hpstyles.css', response);
      break;
    case '/images/logo.png':
      serveStaticFile('public/images/logo.png', response);
      break;
    case '/images/hpcleanup.png':
      serveStaticFile('public/images/hpcleanup.png', response);
      break;
    case '/images/beach.jpg':
      serveStaticFile('public/images/beach.jpg', response);
      break;
    case '/images/second.jpg':
      serveStaticFile('public/images/second.jpg', response);
      break;
    case '/images/third.jpg':
      serveStaticFile('public/images/third.jpg', response);
      break;
    case '/images/trash.png':
      serveStaticFile('public/images/blogging.png', response);
      break;
    case '/images/waves.png':
      serveStaticFile('public/images/waves.png', response);
      break;
    case '/images/turtles.webp':
      serveStaticFile('public/images/turtles.webp', response);
      break;
    case '/values.html':
      serveStaticFile('public/values.html', response);
      break;
    case '/scripts/aboutscrip.js':
      serveStaticFile('public/js/aboutscrip.js', response);
      break;
    case '/styles/events.css':
      serveStaticFile('public/css/events.css', response);
      break;
    case '/scripts/events.js':
      serveStaticFile('public/js/events.js', response);
      break;  
    case '/scripts/involved.js':
      serveStaticFile('public/js/involved.js', response);
      break; 
        case '/events.json':
      serveStaticFile('public/events.json', response);
      break; 
    case '/styles/involved.css':
      serveStaticFile('public/css/involved.css', response);
      break; 
    case '/favicon.ico':
      serveStaticFile('public/favicon.ico', response);
      break; 
    
    default:
      serveStaticFile('public/404.html', response);
      response.statusCode = 404;
      break;
  }
}).listen(port);

console.log(`Server running at http://localhost:${port}/`);
