// library imports
import { useContext } from "react"

// state imports
import { TeamContext, teamProviderValue } from "../provider/teamProvider"
import { teamTypes } from "../reducer/teamReducer"

const Victories = () => {
  const {dispatch, teamState} = useContext<teamProviderValue>(TeamContext)
  
  const handleAddVictory = () => dispatch({type: teamTypes.ADD})
  const handleRemoveVictory = () => {
    teamState.count > 0 && dispatch({type: teamTypes.REMOVE})
  }

  return (
    <div className="team_victories">
      <div>{teamState.count} Victories Component</div>
      <button onClick={handleAddVictory}>+</button>
      <button onClick={handleRemoveVictory}>-</button>
    </div>
  )
}

export default Victories