"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

const questions = [
  {
    id: "workday",
    label: "What type of workday do you have?",
    options: ["Office", "Remote", "Hybrid", "Freelance", "Student with desk work"],
  },
  {
    id: "calendar",
    label: "What calendar do you use?",
    options: ["Google Calendar", "Outlook", "Apple Calendar", "Not sure"],
  },
  {
    id: "problem",
    label: "What is your biggest desk-work problem?",
    options: ["Neck pain", "Back pain", "Low energy", "Poor posture", "No time to exercise", "Lunch choices"],
  },
  {
    id: "hours",
    label: "How many hours do you usually sit per workday?",
    options: ["4–6", "6–8", "8–10", "10+"],
  },
  {
    id: "pay",
    label: "Would you pay $29.99/year for a calendar-based reset plan?",
    options: ["Yes", "Maybe", "No"],
  },
]

export function ValidationForm() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="early-access" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Get your free workday reset plan
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Answer a few questions and join the early access list.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
            <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-foreground">You&apos;re on the list!</h3>
            <p className="text-pretty text-muted-foreground">
              Thanks for unshrimping with us. We&apos;ll email your free workday reset plan soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-7 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            {questions.map((q) => (
              <fieldset key={q.id} className="flex flex-col gap-3">
                <legend className="text-sm font-semibold text-foreground">{q.label}</legend>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((option) => {
                    const selected = answers[q.id] === option
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: option }))}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                          selected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        }`}
                        aria-pressed={selected}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
            ))}

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="you@work.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl"
              />
            </div>

            <Button type="submit" size="lg" className="rounded-full text-base">
              Join early access
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
