

export const UsersReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'GET_USER_DETAIL': 
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}
