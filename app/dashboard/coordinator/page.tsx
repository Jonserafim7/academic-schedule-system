"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { CurriculumForm } from "@/components/curriculum-form"
import { DisciplineForm } from "@/components/discipline-form"
import { ProfessorForm } from "@/components/professor-form"
import { ScheduleCreation } from "@/components/schedule-creation"

export default function CoordinatorDashboard() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Academic Coordinator Dashboard"
        text="Manage curricula, disciplines, professors, and create schedules"
      />

      <Tabs defaultValue="curricula" className="space-y-4">
        <TabsList>
          <TabsTrigger value="curricula">Curricula</TabsTrigger>
          <TabsTrigger value="disciplines">Disciplines</TabsTrigger>
          <TabsTrigger value="professors">Professors</TabsTrigger>
          <TabsTrigger value="schedules">Schedules</TabsTrigger>
        </TabsList>

        <TabsContent value="curricula" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Curriculum Management</CardTitle>
              <CardDescription>Create and manage curriculum matrices for courses</CardDescription>
            </CardHeader>
            <CardContent>
              <CurriculumForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registered Curricula</CardTitle>
              <CardDescription>View and edit existing curriculum matrices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full caption-bottom text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr className="text-left">
                      <th className="p-2 pl-4">Curriculum Name</th>
                      <th className="p-2">Course</th>
                      <th className="p-2">Year</th>
                      <th className="p-2">Disciplines</th>
                      <th className="p-2 text-right pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">CS Curriculum 2023</td>
                      <td className="p-2">Computer Science</td>
                      <td className="p-2">2023</td>
                      <td className="p-2">24</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">BA Curriculum 2022</td>
                      <td className="p-2">Business Administration</td>
                      <td className="p-2">2022</td>
                      <td className="p-2">32</td>
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

        <TabsContent value="disciplines" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Discipline Management</CardTitle>
              <CardDescription>
                Create and manage disciplines with details like workload and prerequisites
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DisciplineForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registered Disciplines</CardTitle>
              <CardDescription>View and edit existing disciplines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full caption-bottom text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr className="text-left">
                      <th className="p-2 pl-4">Discipline Name</th>
                      <th className="p-2">Code</th>
                      <th className="p-2">Workload</th>
                      <th className="p-2">Credits</th>
                      <th className="p-2 text-right pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">Introduction to Programming</td>
                      <td className="p-2">CS101</td>
                      <td className="p-2">60h</td>
                      <td className="p-2">4</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">Data Structures</td>
                      <td className="p-2">CS201</td>
                      <td className="p-2">60h</td>
                      <td className="p-2">4</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4 font-medium">Algorithms</td>
                      <td className="p-2">CS202</td>
                      <td className="p-2">60h</td>
                      <td className="p-2">4</td>
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

        <TabsContent value="professors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Professor Management</CardTitle>
              <CardDescription>Register professors and manage their information</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfessorForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registered Professors</CardTitle>
              <CardDescription>View and edit existing professor information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full caption-bottom text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr className="text-left">
                      <th className="p-2 pl-4">Name</th>
                      <th className="p-2">Email</th>
                      <th className="p-2">Specialization</th>
                      <th className="p-2 text-right pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">Dr. John Smith</td>
                      <td className="p-2">john.smith@university.edu</td>
                      <td className="p-2">Computer Science</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Availability
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 pl-4 font-medium">Dr. Maria Garcia</td>
                      <td className="p-2">maria.garcia@university.edu</td>
                      <td className="p-2">Business</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Availability
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4 font-medium">Dr. Robert Chen</td>
                      <td className="p-2">robert.chen@university.edu</td>
                      <td className="p-2">Engineering</td>
                      <td className="p-2 text-right pr-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Availability
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedules" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Creation</CardTitle>
              <CardDescription>Create and manage course schedules for the semester</CardDescription>
            </CardHeader>
            <CardContent>
              <ScheduleCreation />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

