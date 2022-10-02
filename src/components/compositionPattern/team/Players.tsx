import { PlayersProps } from "../../../types/TeamTypes"

const Players = ({playerName}: PlayersProps) => {
  return (
    <div>
      {playerName}
    </div>
  )
}

export default Players