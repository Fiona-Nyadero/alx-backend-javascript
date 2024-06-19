// Import required modules
const http = require('http');

// Create HTTP server instance
const app = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send the response body as "Hello Holberton School!"
  res.end('Hello Holberton School!\n');
});

// Specify the port and IP address to bind to
const PORT = 1245;
const ADDRESS = 'localhost'; // You can use '0.0.0.0' to listen on all available interfaces

// Bind the server to the specified port and IP address
app.listen(PORT, ADDRESS, () => {
  console.log(`Server running at http://${ADDRESS}:${PORT}/`);
});

// Export the app variable so it can be used elsewhere if required
module.exports = app;
