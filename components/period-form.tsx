"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PeriodForm() {
  const [periodName, setPeriodName] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [duration, setDuration] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, we would save the period data here
    console.log({ periodName, startTime, endTime, duration })

    // Reset form
    setPeriodName("")
    setStartTime("")
    setEndTime("")
    setDuration("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="period-name">Period Name</Label>
        <Input
          id="period-name"
          value={periodName}
          onChange={(e) => setPeriodName(e.target.value)}
          placeholder="e.g., Morning 1"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="start-time">Start Time</Label>
          <Input
            id="start-time"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="end-time">End Time</Label>
          <Input id="end-time" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration">Duration (minutes)</Label>
          <Input
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g., 100"
            required
          />
        </div>
      </div>

      <Button type="submit">Save Period</Button>
    </form>
  )
}

