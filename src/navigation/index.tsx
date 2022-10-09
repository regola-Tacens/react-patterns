// library imports
import { Dispatch } from "react"

//type imports
import { patternNames } from "../types/PatternTypes"

type NavigationType = {
  setSelectedPattern: Dispatch<React.SetStateAction<String>>
}

const Navigation = ({setSelectedPattern}: NavigationType) => {
  const handlePickPattern = (pattern: patternNames) => {
    setSelectedPattern(pattern)
  }
  return(
    <nav>
      {Object.keys(patternNames).map(pattern => (
        <button onClick={() => handlePickPattern(patternNames[pattern as keyof typeof patternNames])}>
          {pattern}
        </button>
      ))}
    </nav>
  )
}

export default Navigation