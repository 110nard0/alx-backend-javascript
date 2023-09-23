/* eslint-disable  */
const { readFile } = require('fs');

module.exports = async function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let lines = data.split('\n');
        lines = lines.slice(1).filter((line) => line.length > 1);
        const len = lines.length;
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
