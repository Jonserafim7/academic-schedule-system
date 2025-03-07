"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const periods = [
  { id: "morning1", name: "Morning 1 (08:00-09:40)" },
  { id: "morning2", name: "Morning 2 (10:00-11:40)" },
  { id: "afternoon1", name: "Afternoon 1 (14:00-15:40)" },
  { id: "afternoon2", name: "Afternoon 2 (16:00-17:40)" },
  { id: "evening1", name: "Evening 1 (19:00-20:40)" },
  { id: "evening2", name: "Evening 2 (21:00-22:40)" },
]

export function AvailabilityForm() {
  // Initialize availability state with all periods set to false
  const [availability, setAvailability] = useState<Record<string, Record<string, boolean>>>(
    weekdays.reduce(
      (acc, day) => {
        acc[day] = periods.reduce(
          (periodAcc, period) => {
            periodAcc[period.id] = false
            return periodAcc
          },
          {} as Record<string, boolean>,
        )
        return acc
      },
      {} as Record<string, Record<string, boolean>>,
    ),
  )

  const handleCheckboxChange = (day: string, periodId: string, checked: boolean) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [periodId]: checked,
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, we would save the availability data here
    console.log(availability)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {weekdays.map((day) => (
          <Card key={day}>
            <CardContent className="pt-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium">{day}</h3>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {periods.map((period) => (
                  <div key={period.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${day}-${period.id}`}
                      checked={availability[day][period.id]}
                      onCheckedChange={(checked) => handleCheckboxChange(day, period.id, checked as boolean)}
                    />
                    <Label htmlFor={`${day}-${period.id}`}>{period.name}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button type="submit">Save Availability</Button>
    </form>
  )
}

