import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) reject(Error('Cannot load the database'));
    else {
      const table = {};
      const rows = data.split('\n');
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
      resolve(table);
    }
  });
});

export default readDatabase;

