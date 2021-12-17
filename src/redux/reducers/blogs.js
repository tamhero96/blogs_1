const initialState = {
  list: [
    {},
  ]
}
export const blogs = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return {
        ...state,
        list: [...action.payload]
      }
    default:
      return state;
  }
}

