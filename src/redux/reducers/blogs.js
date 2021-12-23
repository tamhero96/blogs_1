const initialState = {
  allblogs: []
}
export const getAllBlogs = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BLOGS':
      return {
        ...state,
        allblogs: action.payload
      }
    default:
      return state;
  }
}

export default getAllBlogs;


