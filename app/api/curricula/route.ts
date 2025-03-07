import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const curricula = await prisma.curriculum.findMany({
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
        disciplines: {
          include: {
            discipline: true,
          },
        },
      },
    })

    return NextResponse.json(curricula)
  } catch (error) {
    console.error("Error fetching curricula:", error)
    return NextResponse.json({ error: "Failed to fetch curricula" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, year, courseId, coordinatorId, disciplines } = body

    const curriculum = await prisma.curriculum.create({
      data: {
        name,
        year: Number.parseInt(year),
        courseId,
        coordinatorId,
      },
    })

    // Add disciplines if provided
    if (disciplines && disciplines.length > 0) {
      await Promise.all(
        disciplines.map((item: any) =>
          prisma.curriculumDiscipline.create({
            data: {
              curriculumId: curriculum.id,
              disciplineId: item.disciplineId,
              semester: item.semester,
            },
          }),
        ),
      )
    }

    return NextResponse.json(curriculum)
  } catch (error) {
    console.error("Error creating curriculum:", error)
    return NextResponse.json({ error: "Failed to create curriculum" }, { status: 500 })
  }
}

