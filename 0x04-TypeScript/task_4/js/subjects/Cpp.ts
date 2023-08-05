// Merge Subjects namespace
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Create Cpp class extending Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      const teacherXP = this.teacher.experienceTeachingC;
      return teacherXP !== undefined && Number.isInteger(teacherXP) && teacherXP > 0 ?
        `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }
  }
}