import { Terminal } from "lucide-react"

export function FloatHeader() {
  return (
    <header className="border-b border-purple-800 p-4 bg-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-purple-400" />
          <span className="font-mono text-xl text-purple-400">[FLOAT BBS | module::concept-explorer.v1]</span>
        </div>
        <div className="font-mono text-sm text-purple-400">(E) Exit (H) Help</div>
      </div>
    </header>
  )
}
