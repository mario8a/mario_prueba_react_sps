


export const UsersReducer = (state, action) => {
  

  switch (action.type) {
    case 'setUsers':
      return {
        ...state
      }
    default:
      return state;
  }
}
