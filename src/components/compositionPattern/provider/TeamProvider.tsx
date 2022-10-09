// library imports
import { createContext, Dispatch } from "react"

// type imports
import { TeamStateType, TeamActionType } from "../reducer/teamReducer"

export const TeamContext = createContext<any>(null)

export type teamProviderValue = {
  teamState: TeamStateType,
  dispatch: React.Dispatch<TeamActionType>
}
type TeamProviderProps = {
  children: React.ReactNode,
  value: teamProviderValue
}

const TeamProvider = ({children, value}:TeamProviderProps) => {
  return(
    <TeamContext.Provider value={value}>
      {children}
    </TeamContext.Provider>
  )
}

export default TeamProvider