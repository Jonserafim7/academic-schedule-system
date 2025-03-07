import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const scheduleId = params.id
    const body = await request.json()
    const { directorId, status, feedback } = body

    // Update the schedule status
    await prisma.schedule.update({
      where: {
        id: scheduleId,
      },
      data: {
        status: status === "APPROVED" ? "APPROVED" : "REJECTED",
      },
    })

    // Create an approval record
    const approval = await prisma.scheduleApproval.create({
      data: {
        scheduleId,
        directorId,
        status: status,
        feedback,
      },
    })

    return NextResponse.json(approval)
  } catch (error) {
    console.error("Error approving schedule:", error)
    return NextResponse.json({ error: "Failed to approve schedule" }, { status: 500 })
  }
}

