import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const scheduleId = params.id

    // Update the schedule status to pending approval
    const schedule = await prisma.schedule.update({
      where: {
        id: scheduleId,
      },
      data: {
        status: "PENDING_APPROVAL",
      },
    })

    return NextResponse.json(schedule)
  } catch (error) {
    console.error("Error submitting schedule:", error)
    return NextResponse.json({ error: "Failed to submit schedule" }, { status: 500 })
  }
}

