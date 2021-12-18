const initialState = {
  Blogs: [],
  idBlogs: [],
}
export const blogs = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_BLOGS':
      return {
        ...state,
        Blogs: [...action.payload]
      }
    case 'ID_BLOG':
      return {
        ...state,
        idBlogs: [action.payload]
      }
    default:
      return state;
  }
}

