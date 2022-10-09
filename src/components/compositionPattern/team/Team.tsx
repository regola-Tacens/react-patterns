// library imports
import { useReducer} from "react";

// type imports
import { TeamProps } from "src/types/TeamTypes"

// component imports
import Players from './Players'
import Victories from './Victories'
import Expenses from "./Expenses";


// state imports
import TeamProvider from "../provider/teamProvider";
import teamReducer from "../reducer/teamReducer";

// style imports
import '../../../styles/team.css'

const initialState = {
  count: 0,
}

const Team = ({children}: TeamProps) => {
  const [teamState, dispatch] = useReducer(teamReducer, initialState)
  
  return (
    <TeamProvider value={{teamState, dispatch }}>
      <div className='team-container'>
        <h3>TEAM</h3>
        {children}
      </div>
    </TeamProvider>
  )
}

Team.Players = Players
Team.Victories = Victories
Team.Expenses = Expenses

export default Team