// library imports
import { useState } from 'react'

// component imports
import CompositionPattern from './components/compositionPattern'
import HOCPattern from './components/HOCPattern'
import Navigation from './navigation'

// style imports
import './App.css'

// type imports
import { patternNames } from './types/PatternTypes'

export const patternComponents = {
  COMPOSITION: <CompositionPattern />,
  HOC: <HOCPattern />
}

function App() {
  const[selectedPattern, setSelectedPattern] = useState<String>(patternNames.COMPOSITION)
  
  return (
    <div className="App">
      <Navigation setSelectedPattern={setSelectedPattern}/>
      <section className="pattern-components">
        {patternComponents[selectedPattern as keyof typeof patternNames]}
      </section>
    </div>
  )
}

export default App
