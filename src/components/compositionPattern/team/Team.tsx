// library imports
import { useState } from "react";

// type imports
import { TeamProps } from "src/types/TeamTypes"

// component imports
import Players from './Players'
import Victories from './Victories'
import Expenses from "./Expenses";

// style imports
import '../../../styles/team.css'

// state imports
import TeamProvider from "../provider/teamProvider";

const Team = ({children}: TeamProps) => {
  const [count, setCount] = useState(0)

  return (
    <TeamProvider value={{count, setCount}}>
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