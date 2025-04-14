"use client"

import { useState } from "react"
import ConceptExplorer from "@/components/concept-explorer"
import { ExpansionPatternSelector } from "@/components/expansion-pattern-selector"
import { SigilSelector } from "@/components/sigil-selector"
import { ConceptInput } from "@/components/concept-input"
import type { ExpansionPattern } from "@/types/expansion-patterns"
import { FloatHeader } from "@/components/float-header"

export default function Home() {
  const [selectedPattern, setSelectedPattern] = useState<ExpansionPattern>("concept-led")
  const [selectedSigil, setSelectedSigil] = useState<string>("ψ")
  const [seedConcept, setSeedConcept] = useState<string>("")
  const [isExploring, setIsExploring] = useState(false)

  const handleExplore = () => {
    if (seedConcept.trim() || selectedPattern === "sigil-seeding") {
      setIsExploring(true)
    }
  }

  const handleReset = () => {
    setIsExploring(false)
    setSeedConcept("")
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-purple-300">
      <FloatHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 p-6 border border-purple-500 bg-black rounded-md">
          <h1 className="text-3xl font-mono font-bold mb-4 text-purple-400">FLOAT Concept Explorer</h1>
          <p className="mb-4 font-mono">
            Select an expansion pattern and provide a seed to begin exploring your knowledge ecosystem.
          </p>

          <div className="space-y-6">
            <ExpansionPatternSelector selectedPattern={selectedPattern} onSelectPattern={setSelectedPattern} />

            {selectedPattern === "sigil-seeding" && (
              <SigilSelector selectedSigil={selectedSigil} onSelectSigil={setSelectedSigil} />
            )}

            {selectedPattern !== "sigil-seeding" && (
              <ConceptInput value={seedConcept} onChange={setSeedConcept} pattern={selectedPattern} />
            )}

            <div className="flex space-x-4">
              <button
                onClick={handleExplore}
                className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white font-mono rounded-md transition-colors"
              >
                Explore
              </button>

              {isExploring && (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-mono rounded-md transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {isExploring && (
          <ConceptExplorer
            pattern={selectedPattern}
            seed={seedConcept}
            sigil={selectedPattern === "sigil-seeding" ? selectedSigil : undefined}
          />
        )}
      </div>
    </main>
  )
}
