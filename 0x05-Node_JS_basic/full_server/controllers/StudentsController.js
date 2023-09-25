import readDatabase from '../utils.js';

const dbName = process.argv[2].toString();

class StudentsController {
  static getAllStudents(request, response) {
    console.log(dbName)
    readDatabase(dbName)
      .then((students) => {
        const ordered = Object.keys(students).sort().reduce((obj, key) =>
          (obj[key] = students[key], obj), {});
        let output = '';

        output += 'This is the list of our students';
        for (const key in ordered) {
          const studentList = ordered[key];
          output += `Number of students in ${key}: ${studentList.length}. `
          output += `List: ${studentList.join(', ')}`;
          output += '\n';
        }

        response.statusCode = 200;
        res.send(output.trim())
      })
      .catch((error) => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major != 'CS' && major != 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    }

    readDatabase(dbName)
      .then((students) => {
        const ordered = Object.keys(students).sort().reduce((obj, key) =>
          (obj[key] = students[key], obj), {});
        let output = '';

        for (const key in ordered) {
          if (key == major) {
            const studentList = ordered[key];
            output += `List: ${studentList.join(', ')}`;
          }
        }

        response.statusCode = 200;
        res.send(output)
      })
      .catch((error) => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      })
  }
}

export default StudentsController;
