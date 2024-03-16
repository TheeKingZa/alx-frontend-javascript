// File Directory: task_4/js/subjects/Subject.ts

/**
 * Defines the Subject class within the Subjects namespace.
 */
namespace Subjects {
    /**
     * Represents a subject.
     */
    export class Subject {
      teacher: Teacher | undefined; // The teacher of the subject
  
      /**
       * Sets the teacher for the subject.
       * @param teacher The teacher to set for the subject.
       */
      setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
    }
  }
  