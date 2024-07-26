const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const rows = data.split('\n');
        const table = {};
        let students = -1;
        let result = '';
        for (const row of rows) {
          if (row.trim() !== '') {
            const columns = row.split(',');
            const field = columns[3];
            const firstname = columns[0];
            if (students >= 0) {
              if (!Object.hasOwnProperty.call(table, field)) {
                table[field] = [];
              }
              table[field] = [...table[field], firstname];
            }
            students += 1;
          }
        }
        result += `Number of students: ${students}\n`;
        for (const key in table) {
          if (Object.hasOwnProperty.call(table, key)) {
            result += `Number of students in ${key}: ${table[key].length}. List: ${table[key].join(', ')}\n`;
          }
        }
        resolve(result);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(404);
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404);
    res.end('Not foundx');
  }
});

app.listen(1245);

module.exports = app;
