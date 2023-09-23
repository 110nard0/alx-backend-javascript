/* eslint-disable  */
const http = require('http');
const { readFile } = require('fs');

const fileName = process.argv[2].toString();
const hostname = '127.0.0.1';
const port = 1245;

const countStudents = async (filePath) => {
  return new Promise((resolve, reject) => {
    readFile(filePath, encoding = 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
          let lines = data.split('\n');
          lines = lines.slice(1).filter(line => line.length > 1);
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
            nameList = fieldset[key];
            output += `Number of students in ${key}: ${nameList.length}. `;
            output += `List: ${nameList.join(', ')}`;
            output += '\n';
          }
          resolve(output);
      }
    });
  });
};

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(fileName)
      .then((output) => {
        res.end(output.trim());
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      })
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
