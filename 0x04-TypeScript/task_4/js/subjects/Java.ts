// File Directory: task_4/js/subjects/Java.ts

/**
 * Defines the Java class within the Subjects namespace.
 */
namespace Subjects {
    /**
     * Represents a Java subject.
     */
    export class Java extends Subject {
      /**
       * Gets the requirements for the Java subject.
       * @returns A string representing the requirements for Java.
       */
      getRequirements(): string {
        return "Here is the list of requirements for Java";
      }
  
      /**
       * Gets the available teacher for Java subject.
       * @returns A string indicating the available teacher for Java subject.
       */
      getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingJava !== undefined) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  