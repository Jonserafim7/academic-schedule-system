"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { AvailabilityForm } from "@/components/availability-form"
import { Badge } from "@/components/ui/badge"

export default function ProfessorDashboard() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Professor Dashboard" text="Manage your availability and view assigned courses" />

      <Tabs defaultValue="availability" className="space-y-4">
        <TabsList>
          <TabsTrigger value="availability">Availability</TabsTrigger>
          <TabsTrigger value="assignments">Course Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="availability" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Availability Management</CardTitle>
              <CardDescription>Set your availability for teaching assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <AvailabilityForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Assignments</CardTitle>
              <CardDescription>View your assigned courses for the current semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full caption-bottom text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr className="text-left">
                      <th className="p-2 pl-4">Course</th>
                      <th className="p-2">Discipline</th>
                      <th className="p-2">Schedule</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">Computer Science</td>
                      <td className="p-2">Introduction to Programming</td>
                      <td className="p-2">Mon, Wed 08:00-09:40</td>
                      <td className="p-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Confirmed
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">Computer Science</td>
                      <td className="p-2">Data Structures</td>
                      <td className="p-2">Tue, Thu 10:00-11:40</td>
                      <td className="p-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Confirmed
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4 font-medium">Computer Engineering</td>
                      <td className="p-2">Introduction to Programming</td>
                      <td className="p-2">Fri 14:00-17:40</td>
                      <td className="p-2">
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          Pending Approval
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

