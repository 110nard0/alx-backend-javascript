/* eslint-disable  */
const fs = require('fs');

module.exports = function countStudents(filePath) {
  try {
    const content = fs.readFileSync(filePath, encoding = 'utf-8');
    let lines = content.split('\n');
    lines = lines.slice(1).slice(0, -1);
    const len = lines.length;
    const fieldset = {};

    for (const line of lines) {
      if (line) {
        const data = line.split(',');
        const field = data[3];

        if (!(field in fieldset)) {
          fieldset[field] = [];
        }
        fieldset[field].push(data[0]);
      }
    }

    console.log(`Number of students: ${len}`);

    for (const key in fieldset) {
      nameList = fieldset[key];
      console.log(`Number of students in ${key}: ${nameList.length}. List: ${nameList.join(', ')}`);
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};
