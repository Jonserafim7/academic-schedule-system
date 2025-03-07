import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  // Create users with different roles
  const directorPassword = await hash("director123", 10)
  const directorUser = await prisma.user.create({
    data: {
      name: "Academic Director",
      email: "director@university.edu",
      password: directorPassword,
      role: "DIRECTOR",
      director: {
        create: {},
      },
    },
  })

  const coordinatorPassword = await hash("coordinator123", 10)
  const coordinatorUser = await prisma.user.create({
    data: {
      name: "Academic Coordinator",
      email: "coordinator@university.edu",
      password: coordinatorPassword,
      role: "COORDINATOR",
      coordinator: {
        create: {},
      },
    },
  })

  const professorPassword = await hash("professor123", 10)
  const professorUser = await prisma.user.create({
    data: {
      name: "Dr. John Smith",
      email: "professor@university.edu",
      password: professorPassword,
      role: "PROFESSOR",
      professor: {
        create: {
          specialization: "Computer Science",
          bio: "PhD in Computer Science with 10 years of teaching experience.",
        },
      },
    },
  })

  // Create periods
  const periods = await Promise.all([
    prisma.period.create({
      data: {
        name: "Morning 1",
        startTime: "08:00",
        endTime: "09:40",
        durationMinutes: 100,
      },
    }),
    prisma.period.create({
      data: {
        name: "Morning 2",
        startTime: "10:00",
        endTime: "11:40",
        durationMinutes: 100,
      },
    }),
    prisma.period.create({
      data: {
        name: "Afternoon 1",
        startTime: "14:00",
        endTime: "15:40",
        durationMinutes: 100,
      },
    }),
    prisma.period.create({
      data: {
        name: "Afternoon 2",
        startTime: "16:00",
        endTime: "17:40",
        durationMinutes: 100,
      },
    }),
  ])

  // Create a course
  const course = await prisma.course.create({
    data: {
      name: "Computer Science",
      code: "CS-001",
      coordinatorId: coordinatorUser.coordinator!.id,
    },
  })

  // Associate periods with the course
  await Promise.all(
    periods.map((period) =>
      prisma.coursePeriod.create({
        data: {
          courseId: course.id,
          periodId: period.id,
        },
      }),
    ),
  )

  // Create a curriculum
  const curriculum = await prisma.curriculum.create({
    data: {
      name: "CS Curriculum 2023",
      year: 2023,
      courseId: course.id,
      coordinatorId: coordinatorUser.coordinator!.id,
    },
  })

  // Create disciplines
  const disciplines = await Promise.all([
    prisma.discipline.create({
      data: {
        name: "Introduction to Programming",
        code: "CS101",
        workloadHours: 60,
        credits: 4,
        ementa: "Introduction to programming concepts using Python.",
        coordinatorId: coordinatorUser.coordinator!.id,
      },
    }),
    prisma.discipline.create({
      data: {
        name: "Data Structures",
        code: "CS201",
        workloadHours: 60,
        credits: 4,
        ementa: "Study of data structures and algorithms.",
        coordinatorId: coordinatorUser.coordinator!.id,
      },
    }),
    prisma.discipline.create({
      data: {
        name: "Algorithms",
        code: "CS202",
        workloadHours: 60,
        credits: 4,
        ementa: "Analysis and design of algorithms.",
        coordinatorId: coordinatorUser.coordinator!.id,
      },
    }),
  ])

  // Associate disciplines with the curriculum
  await Promise.all(
    disciplines.map((discipline, index) =>
      prisma.curriculumDiscipline.create({
        data: {
          curriculumId: curriculum.id,
          disciplineId: discipline.id,
          semester: Math.floor(index / 2) + 1, // Distribute disciplines across semesters
        },
      }),
    ),
  )

  // Set up prerequisites (Data Structures requires Intro to Programming)
  await prisma.disciplinePrerequisite.create({
    data: {
      disciplineId: disciplines[1].id, // Data Structures
      prerequisiteId: disciplines[0].id, // Intro to Programming
    },
  })

  // Set professor availability
  const professorId = professorUser.professor!.id
  const daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"]

  // Create availability records for the professor
  await Promise.all(
    daysOfWeek.flatMap((day) =>
      periods.map((period) =>
        prisma.availability.create({
          data: {
            professorId,
            dayOfWeek: day as any,
            periodId: period.id,
            isAvailable: Math.random() > 0.3, // Randomly set availability
          },
        }),
      ),
    ),
  )

  console.log("Database has been seeded!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

