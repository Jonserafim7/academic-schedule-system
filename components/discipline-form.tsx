"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DisciplineForm() {
  const [disciplineName, setDisciplineName] = useState("")
  const [disciplineCode, setDisciplineCode] = useState("")
  const [workload, setWorkload] = useState("")
  const [credits, setCredits] = useState("")
  const [curriculum, setCurriculum] = useState("")
  const [ementa, setEmenta] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, we would save the discipline data here
    console.log({ disciplineName, disciplineCode, workload, credits, curriculum, ementa })

    // Reset form
    setDisciplineName("")
    setDisciplineCode("")
    setWorkload("")
    setCredits("")
    setCurriculum("")
    setEmenta("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="discipline-name">Discipline Name</Label>
          <Input
            id="discipline-name"
            value={disciplineName}
            onChange={(e) => setDisciplineName(e.target.value)}
            placeholder="e.g., Introduction to Programming"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="discipline-code">Discipline Code</Label>
          <Input
            id="discipline-code"
            value={disciplineCode}
            onChange={(e) => setDisciplineCode(e.target.value)}
            placeholder="e.g., CS101"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="workload">Workload (hours)</Label>
          <Input
            id="workload"
            type="number"
            value={workload}
            onChange={(e) => setWorkload(e.target.value)}
            placeholder="e.g., 60"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="credits">Credits</Label>
          <Input
            id="credits"
            type="number"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            placeholder="e.g., 4"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="curriculum">Curriculum</Label>
          <Select value={curriculum} onValueChange={setCurriculum}>
            <SelectTrigger id="curriculum">
              <SelectValue placeholder="Select a curriculum" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">CS Curriculum 2023</SelectItem>
              <SelectItem value="2">BA Curriculum 2022</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="ementa">Ementa (Syllabus)</Label>
        <Textarea
          id="ementa"
          value={ementa}
          onChange={(e) => setEmenta(e.target.value)}
          placeholder="Enter the discipline syllabus..."
          rows={4}
        />
      </div>

      <Button type="submit">Save Discipline</Button>
    </form>
  )
}

