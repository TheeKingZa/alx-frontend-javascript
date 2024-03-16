// File Directory: task_4/js/subjects/React.ts

/**
 * Defines the React class within the Subjects namespace.
 */
namespace Subjects {
    /**
     * Represents a React subject.
     */
    export class React extends Subject {
      /**
       * Gets the requirements for the React subject.
       * @returns A string representing the requirements for React.
       */
      getRequirements(): string {
        return "Here is the list of requirements for React";
      }
  
      /**
       * Gets the available teacher for React subject.
       * @returns A string indicating the available teacher for React subject.
       */
      getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingReact !== undefined) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  