import Team from "./team/Team"

const CompositionPattern = () => {
return (
    <Team>
      <Team.Players />
      <Team.Expenses />
      <Team.Victories />
    </Team>
  )
}

export default CompositionPattern