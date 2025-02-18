"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function CharacterSheet() {
  const [character, setCharacter] = useState({
    name: "",
    classAndLevel: "",
    background: "",
    playerName: "",
    race: "",
    alignment: "",
    experiencePoints: "",
    abilityScores: {
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: "",
    },
    inspiration: "",
    proficiencyBonus: "",
    armorClass: "",
    initiative: "",
    speed: "",
    maxHp: "",
    currentHp: "",
    temporaryHp: "",
    personalityTraits: "",
    ideals: "",
    bonds: "",
    flaws: "",
  })

  const skills = [
    { name: "Acrobatics", ability: "Dex" },
    { name: "Animal Handling", ability: "Wis" },
    { name: "Arcana", ability: "Int" },
    { name: "Athletics", ability: "Str" },
    { name: "Deception", ability: "Cha" },
    { name: "History", ability: "Int" },
    { name: "Insight", ability: "Wis" },
    { name: "Intimidation", ability: "Cha" },
    { name: "Investigation", ability: "Int" },
    { name: "Medicine", ability: "Wis" },
    { name: "Nature", ability: "Int" },
    { name: "Perception", ability: "Wis" },
    { name: "Performance", ability: "Cha" },
    { name: "Persuasion", ability: "Cha" },
    { name: "Religion", ability: "Int" },
    { name: "Sleight of Hand", ability: "Dex" },
    { name: "Stealth", ability: "Dex" },
    { name: "Survival", ability: "Wis" },
  ]

  const handleInputChange = (field: string, value: string) => {
    setCharacter((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAbilityScoreChange = (ability: string, value: string) => {
    setCharacter((prev) => ({
      ...prev,
      abilityScores: {
        ...prev.abilityScores,
        [ability]: value,
      },
    }))
  }

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="bg-white rounded-lg border-2 border-black p-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="col-span-1 md:col-span-3">
            <Label>Character Name</Label>
            <Input
              value={character.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="border-2 border-black"
            />
          </div>
          <div>
            <Label>Class & Level</Label>
            <Input
              value={character.classAndLevel}
              onChange={(e) => handleInputChange("classAndLevel", e.target.value)}
              className="border-2 border-black"
            />
          </div>
          <div>
            <Label>Background</Label>
            <Input
              value={character.background}
              onChange={(e) => handleInputChange("background", e.target.value)}
              className="border-2 border-black"
            />
          </div>
          <div>
            <Label>Player Name</Label>
            <Input
              value={character.playerName}
              onChange={(e) => handleInputChange("playerName", e.target.value)}
              className="border-2 border-black"
            />
          </div>
          <div>
            <Label>Race</Label>
            <Input
              value={character.race}
              onChange={(e) => handleInputChange("race", e.target.value)}
              className="border-2 border-black"
            />
          </div>
          <div>
            <Label>Alignment</Label>
            <Input
              value={character.alignment}
              onChange={(e) => handleInputChange("alignment", e.target.value)}
              className="border-2 border-black"
            />
          </div>
          <div>
            <Label>Experience Points</Label>
            <Input
              value={character.experiencePoints}
              onChange={(e) => handleInputChange("experiencePoints", e.target.value)}
              className="border-2 border-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - Ability Scores */}
          <div className="md:col-span-3 space-y-4">
            {Object.entries(character.abilityScores).map(([ability, value]) => (
              <Card key={ability} className="p-4 border-2 border-black">
                <Label className="text-center block capitalize">{ability}</Label>
                <Input
                  type="number"
                  value={value}
                  onChange={(e) => handleAbilityScoreChange(ability, e.target.value)}
                  className="text-center text-xl font-bold border-2 border-black"
                />
                <div className="text-center text-sm mt-1">
                  Modifier: {value ? Math.floor((Number.parseInt(value) - 10) / 2) : ""}
                </div>
              </Card>
            ))}
          </div>

          {/* Middle Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 border-2 border-black">
                <Label>Armor Class</Label>
                <Input
                  value={character.armorClass}
                  onChange={(e) => handleInputChange("armorClass", e.target.value)}
                  className="text-center border-2 border-black"
                />
              </Card>
              <Card className="p-4 border-2 border-black">
                <Label>Initiative</Label>
                <Input
                  value={character.initiative}
                  onChange={(e) => handleInputChange("initiative", e.target.value)}
                  className="text-center border-2 border-black"
                />
              </Card>
              <Card className="p-4 border-2 border-black">
                <Label>Speed</Label>
                <Input
                  value={character.speed}
                  onChange={(e) => handleInputChange("speed", e.target.value)}
                  className="text-center border-2 border-black"
                />
              </Card>
            </div>

            <Card className="p-4 border-2 border-black">
              <Label>Hit Points Maximum</Label>
              <Input
                value={character.maxHp}
                onChange={(e) => handleInputChange("maxHp", e.target.value)}
                className="border-2 border-black mb-2"
              />
              <Label>Current Hit Points</Label>
              <Input
                value={character.currentHp}
                onChange={(e) => handleInputChange("currentHp", e.target.value)}
                className="border-2 border-black mb-2"
              />
              <Label>Temporary Hit Points</Label>
              <Input
                value={character.temporaryHp}
                onChange={(e) => handleInputChange("temporaryHp", e.target.value)}
                className="border-2 border-black"
              />
            </Card>

            <Card className="p-4 border-2 border-black">
              <Label className="mb-2">Skills</Label>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2">
                    <Checkbox id={skill.name} />
                    <Label htmlFor={skill.name}>
                      {skill.name} ({skill.ability})
                    </Label>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-4 space-y-4">
            <Card className="p-4 border-2 border-black">
              <Label>Personality Traits</Label>
              <Textarea
                value={character.personalityTraits}
                onChange={(e) => handleInputChange("personalityTraits", e.target.value)}
                className="border-2 border-black"
              />
            </Card>
            <Card className="p-4 border-2 border-black">
              <Label>Ideals</Label>
              <Textarea
                value={character.ideals}
                onChange={(e) => handleInputChange("ideals", e.target.value)}
                className="border-2 border-black"
              />
            </Card>
            <Card className="p-4 border-2 border-black">
              <Label>Bonds</Label>
              <Textarea
                value={character.bonds}
                onChange={(e) => handleInputChange("bonds", e.target.value)}
                className="border-2 border-black"
              />
            </Card>
            <Card className="p-4 border-2 border-black">
              <Label>Flaws</Label>
              <Textarea
                value={character.flaws}
                onChange={(e) => handleInputChange("flaws", e.target.value)}
                className="border-2 border-black"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

