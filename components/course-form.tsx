"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export function CourseForm() {
  const [courseName, setCourseName] = useState("")
  const [courseCode, setCourseCode] = useState("")
  const [coordinator, setCoordinator] = useState("")
  const [coordinators, setCoordinators] = useState([])
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Fetch coordinators
    const fetchCoordinators = async () => {
      try {
        const response = await fetch("/api/users?role=COORDINATOR")
        const data = await response.json()
        setCoordinators(data)
      } catch (error) {
        console.error("Error fetching coordinators:", error)
        toast({
          title: "Error",
          description: "Failed to load coordinators",
          variant: "destructive",
        })
      }
    }

    fetchCoordinators()
  }, [toast])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: courseName,
          code: courseCode,
          coordinatorId: coordinator,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to create course")
      }

      toast({
        title: "Success",
        description: "Course created successfully",
      })

      // Reset form
      setCourseName("")
      setCourseCode("")
      setCoordinator("")
    } catch (error) {
      console.error("Error creating course:", error)
      toast({
        title: "Error",
        description: "Failed to create course",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="course-name">Course Name</Label>
          <Input
            id="course-name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="e.g., Computer Science"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="course-code">Course Code</Label>
          <Input
            id="course-code"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            placeholder="e.g., CS-001"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="coordinator">Academic Coordinator</Label>
        <Select value={coordinator} onValueChange={setCoordinator}>
          <SelectTrigger id="coordinator">
            <SelectValue placeholder="Select a coordinator" />
          </SelectTrigger>
          <SelectContent>
            {coordinators.map((coord: any) => (
              <SelectItem key={coord.coordinator.id} value={coord.coordinator.id}>
                {coord.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Course"}
      </Button>
    </form>
  )
}

