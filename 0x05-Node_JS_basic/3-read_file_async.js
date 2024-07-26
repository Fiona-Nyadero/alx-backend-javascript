const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const rows = data.split('\n');
        const table = {};
        let students = -1;
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
        console.log(`Number of students: ${students}`);
        for (const key in table) {
          if (Object.hasOwnProperty.call(table, key)) {
            console.log(`Number of students in ${key}: ${table[key].length}. List: ${table[key].join(', ')}`);
          }
        }
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
