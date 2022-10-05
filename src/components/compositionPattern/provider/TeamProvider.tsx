import { createContext, Dispatch } from "react"

export const TeamContext = createContext<any>(null)

export type teamProviderValue = {
  count: number, 
  setCount: Dispatch<React.SetStateAction<number>>
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