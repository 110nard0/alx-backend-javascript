// Create Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [key: string]: any;
}

// Create Director interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Create interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Create printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.at(0)}. ${lastName}`
}

// Create interface for studentClass constructor
interface StudentConstructor {
  new(firstName: string, lastName: string): StudentInterface;
}

// Create interface for studentClass
interface StudentInterface {
  firstName: string;
  lastName: string;
  displayName(): string;
  workOnHomework(): string;
}

// Create student class with instance atributes and methods
const StudentClass: StudentConstructor = class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  displayName() {
    return this.firstName;
  }

  workOnHomework() {
    return "Currently working";
  }
}