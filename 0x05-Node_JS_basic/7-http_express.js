/* eslint-disable  */
const express = require('express');
const { readFile } = require('fs');

const app = express();
const fileName = process.argv[2].toString();
const port = 1245;

const countStudents = async (filePath) => {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let lines = data.split('\n');
        lines = lines.slice(1).filter((line) => line.length > 1);
        const len = lines.length;
        const fieldset = {};
        let output = '';

        for (const line of lines) {
          const content = line.split(',');
          const field = content[3];

          if (!(field in fieldset)) {
            fieldset[field] = [];
          }
          fieldset[field].push(content[0]);
        }

        output += `Number of students: ${len}\n`;

        for (const key in fieldset) {
          const nameList = fieldset[key];
          output += `Number of students in ${key}: ${nameList.length}. `;
          output += `List: ${nameList.join(', ')}`;
          output += '\n';
        }
        resolve(output);
      }
    });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(fileName)
    .then((output) => {
      res.send(['This is the list of our students', output.trim()].join('\n'));
    })
    .catch(() => {
      res.statusCode = 404;
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
