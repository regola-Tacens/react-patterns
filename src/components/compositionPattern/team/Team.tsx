// type imports
import { TeamProps } from "../../../types/TeamTypes"
import Players from './Players'
import Victories from './Victories'

const Team = ({children}: TeamProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

Team.Players = Players
Team.Victories = Victories

export default Team