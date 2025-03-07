import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const schedules = await prisma.schedule.findMany({
      include: {
        course: true,
        coordinator: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
        entries: {
          include: {
            discipline: true,
            professor: {
              include: {
                user: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            period: true,
          },
        },
        approvals: {
          include: {
            director: {
              include: {
                user: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    return NextResponse.json(schedules)
  } catch (error) {
    console.error("Error fetching schedules:", error)
    return NextResponse.json({ error: "Failed to fetch schedules" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { courseId, semester, year, coordinatorId, entries } = body

    // Create the schedule
    const schedule = await prisma.schedule.create({
      data: {
        courseId,
        semester: Number.parseInt(semester),
        year: Number.parseInt(year),
        coordinatorId,
        status: "DRAFT",
      },
    })

    // Add schedule entries if provided
    if (entries && entries.length > 0) {
      await Promise.all(
        entries.map((entry: any) =>
          prisma.scheduleEntry.create({
            data: {
              scheduleId: schedule.id,
              disciplineId: entry.disciplineId,
              professorId: entry.professorId,
              dayOfWeek: entry.dayOfWeek,
              periodId: entry.periodId,
            },
          }),
        ),
      )
    }

    return NextResponse.json(schedule)
  } catch (error) {
    console.error("Error creating schedule:", error)
    return NextResponse.json({ error: "Failed to create schedule" }, { status: 500 })
  }
}

