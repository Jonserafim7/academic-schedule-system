import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const disciplines = await prisma.discipline.findMany({
      include: {
        coordinator: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
        prerequisites: {
          include: {
            prerequisite: true,
          },
        },
      },
    })

    return NextResponse.json(disciplines)
  } catch (error) {
    console.error("Error fetching disciplines:", error)
    return NextResponse.json({ error: "Failed to fetch disciplines" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, code, workloadHours, credits, ementa, coordinatorId, prerequisites } = body

    const discipline = await prisma.discipline.create({
      data: {
        name,
        code,
        workloadHours: Number.parseInt(workloadHours),
        credits: Number.parseInt(credits),
        ementa,
        coordinatorId,
      },
    })

    // Add prerequisites if provided
    if (prerequisites && prerequisites.length > 0) {
      await Promise.all(
        prerequisites.map((prerequisiteId: string) =>
          prisma.disciplinePrerequisite.create({
            data: {
              disciplineId: discipline.id,
              prerequisiteId,
            },
          }),
        ),
      )
    }

    return NextResponse.json(discipline)
  } catch (error) {
    console.error("Error creating discipline:", error)
    return NextResponse.json({ error: "Failed to create discipline" }, { status: 500 })
  }
}

