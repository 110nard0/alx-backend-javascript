// Create Director class
class Director {
    constructor() {
        this.workFromHome = () => "Working from home";
        this.getCoffeeBreak = () => "Getting a coffee break";
        this.workDirectorTasks = () => "Getting to director tasks";
    }
}
// Create Teacher class
class Teacher {
    constructor() {
        this.workFromHome = () => "Cannot work from home";
        this.getCoffeeBreak = () => "Cannot have a break";
        this.workTeacherTasks = () => "Getting to work";
    }
}
// Create createEmployee function
const createEmployee = (salary) => {
    return Number(salary) < 500 ? new Teacher() : new Director();
};
// Create type predicate function to check for valid Director
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// Create executeWork function
const executeWork = (employee) => {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
};
// Create teachClass function
const teachClass = (todayClass) => {
    const subject = todayClass === 'Math' ? "Teaching Math" : "Teaching History";
    return subject;
};
