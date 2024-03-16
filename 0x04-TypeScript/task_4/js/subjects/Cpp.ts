// File Directory: task_4/js/subjects/Cpp.ts

/**
 * Defines the Cpp class within the Subjects namespace.
 */
namespace Subjects {
    /**
     * Represents a C++ subject.
     */
    export class Cpp extends Subject {
      /**
       * Gets the requirements for the C++ subject.
       * @returns A string representing the requirements for C++.
       */
      getRequirements(): string {
        return "Here is the list of requirements for Cpp";
      }
  
      /**
       * Gets the available teacher for C++ subject.
       * @returns A string indicating the available teacher for C++ subject.
       */
      getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingC !== undefined) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  