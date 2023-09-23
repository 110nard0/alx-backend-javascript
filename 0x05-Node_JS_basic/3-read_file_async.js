/* eslint-disable  */
const fs = require('fs');

module.exports = async function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding = 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
          let lines = data.split('\n');
          lines = lines.slice(1).filter(line => line.length > 1);
          const len = lines.length;
          const fieldset = {};

          for (const line of lines) {
            const content = line.split(',');
            const field = content[3];

            if (!(field in fieldset)) {
              fieldset[field] = [];
            }
            fieldset[field].push(content[0]);
          }

          console.log(`Number of students: ${len}`);

          for (const key in fieldset) {
            nameList = fieldset[key];
            console.log(`Number of students in ${key}: ${nameList.length}. List: ${nameList.join(', ')}`);
          }
          resolve(data);
      }
    });
  });
};
