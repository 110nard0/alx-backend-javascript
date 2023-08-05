// Merge Subjects namespace
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Create React class extending Subjectnamespace Subjects {
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      const teacherXP = this.teacher.experienceTeachingReact;
      return teacherXP !== undefined && Number.isInteger(teacherXP) && teacherXP > 0 ?
        `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }
  }
}