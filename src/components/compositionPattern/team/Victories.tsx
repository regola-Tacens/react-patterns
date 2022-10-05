// library imports
import { useContext } from "react"

// state imports
import { TeamContext, teamProviderValue } from "../provider/teamProvider"

const Victories = () => {
  const {count, setCount} = useContext<teamProviderValue>(TeamContext)
  
  const handleAddVictory = () => setCount(count => count + 1)
  return (
    <div>
      <span>{count} Victories</span>
      <button onClick={handleAddVictory}>+</button>
    </div>
  )
}

export default Victories