"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { CourseForm } from "@/components/course-form"
import { PeriodForm } from "@/components/period-form"
import { ScheduleApproval } from "@/components/schedule-approval"

export default function DirectorDashboard() {
  const [activeTab, setActiveTab] = useState("courses")

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Academic Director Dashboard"
        text="Manage courses, class periods, and approve schedules"
      />

      <Tabs defaultValue="courses" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="periods">Class Periods</TabsTrigger>
          <TabsTrigger value="approval">Schedule Approval</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Management</CardTitle>
              <CardDescription>
                Register and manage undergraduate courses and assign academic coordinators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CourseForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registered Courses</CardTitle>
              <CardDescription>View and edit existing courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full caption-bottom text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr className="text-left">
                      <th className="p-2 pl-4">Course Name</th>
                      <th className="p-2">Code</th>
                      <th className="p-2">Coordinator</th>
                      <th className="p-2 text-right pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">Computer Science</td>
                      <td className="p-2">CS-001</td>
                      <td className="p-2">Dr. John Smith</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">Business Administration</td>
                      <td className="p-2">BA-002</td>
                      <td className="p-2">Dr. Maria Garcia</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4 font-medium">Mechanical Engineering</td>
                      <td className="p-2">ME-003</td>
                      <td className="p-2">Dr. Robert Chen</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="periods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Class Period Configuration</CardTitle>
              <CardDescription>Define class periods including start time, end time, and duration</CardDescription>
            </CardHeader>
            <CardContent>
              <PeriodForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configured Periods</CardTitle>
              <CardDescription>View and edit existing class periods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full caption-bottom text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr className="text-left">
                      <th className="p-2 pl-4">Period Name</th>
                      <th className="p-2">Start Time</th>
                      <th className="p-2">End Time</th>
                      <th className="p-2">Duration (min)</th>
                      <th className="p-2 text-right pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">Morning 1</td>
                      <td className="p-2">08:00</td>
                      <td className="p-2">09:40</td>
                      <td className="p-2">100</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">Morning 2</td>
                      <td className="p-2">10:00</td>
                      <td className="p-2">11:40</td>
                      <td className="p-2">100</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4 font-medium">Afternoon 1</td>
                      <td className="p-2">14:00</td>
                      <td className="p-2">15:40</td>
                      <td className="p-2">100</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approval" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Approval</CardTitle>
              <CardDescription>Review and approve course schedules submitted by coordinators</CardDescription>
            </CardHeader>
            <CardContent>
              <ScheduleApproval />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

