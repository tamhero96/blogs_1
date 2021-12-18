const initialState = {
  Blogs: [],
  idBlogs: [],
  setLoading: false
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
        idBlogs: [action.payload.data],
        setLoading: action.payload.setLoading
      }
    case 'LOADING_ID_BLOG':
      return {
        ...state,
        setLoading: action.payload
      }
    case 'NLOADING_ID_BLOG':
      return {
        ...state,
        setLoading: action.payload
      }
    default:
      return state;
  }
}

