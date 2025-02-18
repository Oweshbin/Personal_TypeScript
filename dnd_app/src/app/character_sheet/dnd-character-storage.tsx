"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Character = {
  name: string
  race: string
  class: string
  level: string
}

export default function DnDCharacterStorage() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [name, setName] = useState("")
  const [race, setRace] = useState("")
  const [characterClass, setCharacterClass] = useState("")
  const [level, setLevel] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newCharacter: Character = { name, race, class: characterClass, level }
    setCharacters([...characters, newCharacter])
    setName("")
    setRace("")
    setCharacterClass("")
    setLevel("")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">D&D Character Storage</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <Label htmlFor="name">Character Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="race">Race</Label>
          <Input id="race" value={race} onChange={(e) => setRace(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="class">Class</Label>
          <Select onValueChange={setCharacterClass} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Barbarian">Barbarian</SelectItem>
              <SelectItem value="Bard">Bard</SelectItem>
              <SelectItem value="Cleric">Cleric</SelectItem>
              <SelectItem value="Druid">Druid</SelectItem>
              <SelectItem value="Fighter">Fighter</SelectItem>
              <SelectItem value="Monk">Monk</SelectItem>
              <SelectItem value="Paladin">Paladin</SelectItem>
              <SelectItem value="Ranger">Ranger</SelectItem>
              <SelectItem value="Rogue">Rogue</SelectItem>
              <SelectItem value="Sorcerer">Sorcerer</SelectItem>
              <SelectItem value="Warlock">Warlock</SelectItem>
              <SelectItem value="Wizard">Wizard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="level">Level</Label>
          <Input
            id="level"
            type="number"
            min="1"
            max="20"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Add Character</Button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((char, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{char.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Race:</strong> {char.race}
              </p>
              <p>
                <strong>Class:</strong> {char.class}
              </p>
              <p>
                <strong>Level:</strong> {char.level}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
