import Team from "./team/Team"

const CompositionPattern = () => {
const playerName = 'list of players'
return (
  <Team>
    <Team.Players playerName={playerName} />
    <Team.Victories />
  </Team>
)
}

export default CompositionPattern