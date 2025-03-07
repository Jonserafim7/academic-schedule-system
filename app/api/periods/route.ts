import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const periods = await prisma.period.findMany()

    return NextResponse.json(periods)
  } catch (error) {
    console.error("Error fetching periods:", error)
    return NextResponse.json({ error: "Failed to fetch periods" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, startTime, endTime, durationMinutes } = body

    const period = await prisma.period.create({
      data: {
        name,
        startTime,
        endTime,
        durationMinutes: Number.parseInt(durationMinutes),
      },
    })

    return NextResponse.json(period)
  } catch (error) {
    console.error("Error creating period:", error)
    return NextResponse.json({ error: "Failed to create period" }, { status: 500 })
  }
}

