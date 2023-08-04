interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.at(0)}. ${lastName}`
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  displayName(): string;
  workOnHomework(): string;
}

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