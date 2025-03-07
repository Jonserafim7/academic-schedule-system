// Course Types
export interface Course {
  id: string
  name: string
  code: string
  coordinatorId: string
}

// Period Types
export interface Period {
  id: string
  name: string
  startTime: string
  endTime: string
  durationMinutes: number
}

// Curriculum Types
export interface Curriculum {
  id: string
  name: string
  courseId: string
  year: number
  disciplines: string[] // Array of discipline IDs
}

// Discipline Types
export interface Discipline {
  id: string
  name: string
  code: string
  workloadHours: number
  credits: number
  ementa: string
  prerequisites: string[] // Array of discipline IDs
}

// Professor Types
export interface Professor {
  id: string
  name: string
  email: string
  specialization: string
  bio: string
}

// Availability Types
export interface Availability {
  professorId: string
  dayOfWeek: string
  periodId: string
  isAvailable: boolean
}

// Schedule Types
export interface ScheduleEntry {
  id: string
  disciplineId: string
  professorId: string
  courseId: string
  semester: number
  year: number
  dayOfWeek: string[]
  periodId: string[]
  status: "pending" | "approved" | "rejected"
}

// User Types
export interface User {
  id: string
  name: string
  email: string
  role: "director" | "coordinator" | "professor"
}

