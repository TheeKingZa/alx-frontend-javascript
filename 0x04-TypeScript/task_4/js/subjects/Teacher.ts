// File Directory: task_4/js/subjects/Teacher.ts

/**
 * Defines the Teacher interface within the Subjects namespace.
 */
namespace Subjects {
    /**
     * Interface representing a teacher.
     */
    export interface Teacher {
      firstName: string; // First name of the teacher
      lastName: string; // Last name of the teacher
      experienceTeachingC?: number; // Optional: Years of experience teaching C
      experienceTeachingReact?: number; // Optional: Years of experience teaching React
      experienceTeachingJava?: number; // Optional: Years of experience teaching Java
    }
  }
  