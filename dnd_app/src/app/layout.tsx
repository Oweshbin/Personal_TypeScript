import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "D&D Character Manager",
  description: "Manage your D&D 5E character sheets",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">D&D Character Manager</h1>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

