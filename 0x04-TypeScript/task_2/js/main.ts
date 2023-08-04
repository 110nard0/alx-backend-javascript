// Create Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Create Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Create Director class
class Director implements DirectorInterface {
  workFromHome = () => "Working from home";
  getCoffeeBreak = () => "Getting a coffee break";
  workDirectorTasks = () => "Getting to director tasks";
}

// Create Teacher class
class Teacher implements TeacherInterface {
  workFromHome = () => "Cannot work from home";
  getCoffeeBreak = () => "Cannot have a break";
  workTeacherTasks = () => "Getting to work";
}

// Create interface for createEmployee function
interface createEmployeeFunction {
  (salary: number | string): Director | Teacher;
}

// Create createEmployee function
const createEmployee: createEmployeeFunction = (salary) => {
  return Number(salary) < 500 ? new Teacher() : new Director();
}

// Create type predicate function to check for valid Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Create executeWork function
const executeWork = (employee: Director | Teacher): void => {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Create string literal type
type Subjects = 'Math' | 'History';

// Create teachClass function
const teachClass = (todayClass: Subjects): string => {
  const subject = todayClass === "Math" ? "Teaching Math" : "Teaching History";
  return subject;
}
