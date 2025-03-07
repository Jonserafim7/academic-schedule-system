"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertCircle, Calendar } from "lucide-react"

export function ScheduleCreation() {
  const [course, setCourse] = useState("")
  const [semester, setSemester] = useState("")
  const [year, setYear] = useState("")

  // Mock data for the schedule
  const scheduleData = [
    {
      id: 1,
      discipline: "Introduction to Programming",
      professor: "Dr. John Smith",
      schedule: "Mon, Wed 08:00-09:40",
      hasConflict: false,
    },
    {
      id: 2,
      discipline: "Data Structures",
      professor: "Dr. John Smith",
      schedule: "Tue, Thu 10:00-11:40",
      hasConflict: false,
    },
    {
      id: 3,
      discipline: "Algorithms",
      professor: "Dr. Maria Garcia",
      schedule: "Mon, Wed 10:00-11:40",
      hasConflict: false,
    },
    {
      id: 4,
      discipline: "Database Systems",
      professor: "Dr. Robert Chen",
      schedule: "Tue, Thu 14:00-15:40",
      hasConflict: false,
    },
    {
      id: 5,
      discipline: "Software Engineering",
      professor: "Dr. Maria Garcia",
      schedule: "Fri 08:00-11:40",
      hasConflict: true,
    },
  ]

  const handleGenerateSchedule = () => {
    // In a real application, we would generate the schedule here
    console.log({ course, semester, year })
  }

  const handleSubmitForApproval = () => {
    // In a real application, we would submit the schedule for approval here
    console.log("Schedule submitted for approval")
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
          <Label htmlFor="semester">Semester</Label>
          <Select value={semester} onValueChange={setSemester}>
            <SelectTrigger id="semester">
              <SelectValue placeholder="Select a semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">First</SelectItem>
              <SelectItem value="2">Second</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger id="year">
              <SelectValue placeholder="Select a year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={handleGenerateSchedule}>Generate Schedule</Button>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="rounded-md border">
                <table className="w-full caption-bottom text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr className="text-left">
                      <th className="p-2 pl-4">Discipline</th>
                      <th className="p-2">Professor</th>
                      <th className="p-2">Schedule</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="p-2 pl-4 font-medium">{item.discipline}</td>
                        <td className="p-2">{item.professor}</td>
                        <td className="p-2">{item.schedule}</td>
                        <td className="p-2">
                          {item.hasConflict ? (
                            <div className="flex items-center text-red-500">
                              <AlertCircle className="mr-1 h-4 w-4" />
                              Conflict
                            </div>
                          ) : (
                            <div className="flex items-center text-green-500">
                              <CheckCircle className="mr-1 h-4 w-4" />
                              OK
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSubmitForApproval} disabled={scheduleData.some((item) => item.hasConflict)}>
              Submit for Approval
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-center p-4">
                <Calendar className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">
                  Calendar view would display the schedule in a weekly calendar format.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

