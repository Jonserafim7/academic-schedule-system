"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CurriculumForm() {
  const [curriculumName, setCurriculumName] = useState("")
  const [course, setCourse] = useState("")
  const [year, setYear] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, we would save the curriculum data here
    console.log({ curriculumName, course, year })

    // Reset form
    setCurriculumName("")
    setCourse("")
    setYear("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="curriculum-name">Curriculum Name</Label>
        <Input
          id="curriculum-name"
          value={curriculumName}
          onChange={(e) => setCurriculumName(e.target.value)}
          placeholder="e.g., CS Curriculum 2023"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="course">Course</Label>
          <Select value={course} onValueChange={setCourse}>
            <SelectTrigger id="course">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Computer Science</SelectItem>
              <SelectItem value="2">Business Administration</SelectItem>
              <SelectItem value="3">Mechanical Engineering</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g., 2023"
            required
          />
        </div>
      </div>

      <Button type="submit">Save Curriculum</Button>
    </form>
  )
}

