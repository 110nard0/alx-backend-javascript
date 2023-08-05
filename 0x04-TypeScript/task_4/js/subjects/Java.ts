// Merge Subjects namespace
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Create Java class extending Subjectnamespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      const teacherXP = this.teacher.experienceTeachingJava;
      return teacherXP !== undefined && Number.isInteger(teacherXP) && teacherXP > 0 ?
        `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }
  }
}