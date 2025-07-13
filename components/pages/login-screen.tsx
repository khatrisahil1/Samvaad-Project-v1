"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface LoginScreenProps {
  setPage: (page: string) => void
}

export default function LoginScreen({ setPage }: LoginScreenProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call for login
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (email === "test@samvaad.com" && password === "password") {
      alert("Welcome back! Redirecting to your safe space...")
      setPage("student-dashboard") // Redirect to dashboard on success
    } else {
      setError("We couldn't find a match for that email and password. Please check your details and try again.")
    }
    setIsSubmitting(false)
  }

  return (
    <main className="flex-1 py-16 md:py-24 bg-background animate-fade-in flex items-center justify-center">
      <Card className="w-full max-w-md p-6 md:p-8 bg-card text-card-foreground shadow-lg border-border">
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-3xl font-heading font-bold text-foreground">Login to SAMVAAD</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="font-body">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-border focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="password" className="font-body">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-border focus:ring-primary focus:border-primary"
              />
            </div>
            {error && <p className="text-destructive text-sm text-center font-body">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Connecting you..." : "Login"}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm font-body text-muted-foreground">
            New to SAMVAAD?{" "}
            <Button
              variant="link"
              className="p-0 h-auto text-primary hover:underline font-body"
              onClick={() => alert("Simulating sign-up navigation...")}
            >
              Join Our Community
            </Button>
          </div>
          <p className="mt-8 text-center text-xs font-body text-muted-foreground">
            <span className="font-semibold">Your Safe Space:</span> We are committed to protecting your privacy and
            providing a secure, non-judgmental environment for your healing journey.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
