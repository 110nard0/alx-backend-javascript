import { readFile } from 'fs';
// import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      console.log(filePath)
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let lines = data.toString().split('\n');
        lines = lines.slice(1).filter((line) => line.length > 1);
        const fieldset = {};

        for (const line of lines) {
          const fields = line.split(',');
          const field = fields[3];

          if (!(field in fieldset)) {
            fieldset[field] = [];
          }
          fieldset[field].push(fields[0]);
        }
        resolve(fieldset);
      }
    });
  });
};

export default readDatabase;
