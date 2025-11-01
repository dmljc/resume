import * as React from 'react'
import ResumeClone from '../components/sections/ResumeClone.jsx'

export default function ResumePage() {
  return (
    <div>
      <main className="min-h-screen pt-16">
        <ResumeClone />
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Zhang Fangchao</footer>
    </div>
  )
}