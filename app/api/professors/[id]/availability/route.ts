import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const professorId = params.id

    const availability = await prisma.availability.findMany({
      where: {
        professorId,
      },
      include: {
        period: true,
      },
    })

    return NextResponse.json(availability)
  } catch (error) {
    console.error("Error fetching professor availability:", error)
    return NextResponse.json({ error: "Failed to fetch professor availability" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const professorId = params.id
    const body = await request.json()
    const { availabilityData } = body

    // Delete existing availability records
    await prisma.availability.deleteMany({
      where: {
        professorId,
      },
    })

    // Create new availability records
    const availability = await Promise.all(
      availabilityData.map((item: any) =>
        prisma.availability.create({
          data: {
            professorId,
            dayOfWeek: item.dayOfWeek,
            periodId: item.periodId,
            isAvailable: item.isAvailable,
          },
        }),
      ),
    )

    return NextResponse.json(availability)
  } catch (error) {
    console.error("Error updating professor availability:", error)
    return NextResponse.json({ error: "Failed to update professor availability" }, { status: 500 })
  }
}

