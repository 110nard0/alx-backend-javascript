const printTeacher = (firstName, lastName) => {
    return `${firstName.at(0)}. ${lastName}`;
};
const StudentClass = class StudentClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return "Currently working";
    }
    displayName() {
        return this.firstName;
    }
};
