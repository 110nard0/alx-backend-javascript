/* eslint-disable  */
import readDatabase from '../utils';

const dbName = process.argv[2].toString();

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(dbName)
      .then((students) => {
        let output = '';

        output += 'This is the list of our students\n';
        for (const key in students) {
          const studentList = students[key];
          output += `Number of students in ${key}: ${studentList.length}. `;
          output += `List: ${studentList.join(', ')}`;
          output += '\n';
        }

        response.statusCode = 200;
        response.send(output.trim());
      })
      .catch(() => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(dbName)
        .then((students) => {
          let output = '';

          for (const key in students) {
            if (key === major) {
              const studentList = students[key];
              output += `List: ${studentList.join(', ')}`;
            }
          }

          response.statusCode = 200;
          response.send(output);
        })
        .catch(() => {
          response.statusCode = 500;
          response.send('Cannot load the database');
        });
    }
  }
}

export default StudentsController;
