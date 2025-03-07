"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ProfessorForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [bio, setBio] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, we would save the professor data here
    console.log({ name, email, specialization, bio })

    // Reset form
    setName("")
    setEmail("")
    setSpecialization("")
    setBio("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Dr. John Smith"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g., john.smith@university.edu"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialization">Specialization</Label>
        <Input
          id="specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          placeholder="e.g., Computer Science"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Biography</Label>
        <Textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Enter professor's biography..."
          rows={4}
        />
      </div>

      <Button type="submit">Save Professor</Button>
    </form>
  )
}

