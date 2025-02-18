"use client"

import { useState } from "react"
import Link from "next/link"
import { PlusCircle, Scroll } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Character = {
  id: string
  name: string
  classAndLevel: string
  race: string
  background: string
}

export default function Home() {
  // In a real app, this would be fetched from a database
  const [characters, setCharacters] = useState<Character[]>([
    {
      id: "1",
      name: "Thorin Stonefist",
      classAndLevel: "Fighter 5",
      race: "Dwarf",
      background: "Soldier",
    },
    {
      id: "2",
      name: "Luna Moonshadow",
      classAndLevel: "Ranger 3",
      race: "Elf",
      background: "Outlander",
    },
  ])

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Your Characters</h2>
            <p className="text-muted-foreground">Manage your D&D 5E character sheets</p>
          </div>
          <Link href="/character-sheet">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Character
            </Button>
          </Link>
        </div>

        {characters.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-8 text-center">
              <Scroll className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Characters Yet</h3>
              <p className="text-muted-foreground mb-4">
                Create your first character to get started on your adventure!
              </p>
              <Link href="/character-sheet">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Character
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {characters.map((character) => (
              <Link key={character.id} href={`/character/${character.id}`}>
                <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle>{character.name}</CardTitle>
                    <CardDescription>
                      {character.race} • {character.classAndLevel}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{character.background}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

