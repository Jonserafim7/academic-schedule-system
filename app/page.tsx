import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CalendarDays, BookOpen, Users, ClipboardList } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary px-6 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Academic Schedule System</h1>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-10 px-4">
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Academic Schedule Management System</h2>
          <p className="text-lg text-muted-foreground mb-6">
            A comprehensive solution for managing course schedules and teaching assignments for undergraduate programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Course Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Register and manage undergraduate courses and their academic coordinators.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary" />
                  Curriculum Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create and manage curriculum matrices and their respective disciplines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Professor Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Register professors and manage their availability schedules.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Schedule Creation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatically create conflict-free schedules based on professor availability.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Automated schedule creation that respects professor availability</li>
            <li>Conflict prevention to ensure professors aren't assigned to multiple classes simultaneously</li>
            <li>Curriculum management with detailed discipline information</li>
            <li>Role-based access for directors, coordinators, and professors</li>
            <li>Approval workflow for schedule validation</li>
          </ul>
        </section>
      </main>

      <footer className="bg-muted py-6 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Academic Schedule Management System
        </div>
      </footer>
    </div>
  )
}

