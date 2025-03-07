import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const professors = await prisma.professor.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json(professors)
  } catch (error) {
    console.error("Error fetching professors:", error)
    return NextResponse.json({ error: "Failed to fetch professors" }, { status: 500 })
  }
}

