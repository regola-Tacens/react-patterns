export enum teamTypes  {
  ADD = 'add',
  REMOVE = 'remove'
}

export interface TeamStateType {
  count: number
}
export interface TeamActionType {
  type: teamTypes,
  payload?: any
}

const teamReducer = (teamState: TeamStateType, action: TeamActionType) => {
  switch (action.type) {
    case teamTypes.ADD:
      return { ...teamState, count: teamState.count + 1 }
    case teamTypes.REMOVE:
      return { ...teamState, count: teamState.count - 1 }
    default:
      return teamState
  }
}

export default teamReducer
