const initialState = {
  allblogs: [],
  blogID: [],
}
export const handleBlog = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BLOGS':
      return {
        ...state,
        allblogs: action.payload
      }
      
    // get blog id
    case 'GET_BLOG_ID_SUCCESS':
      return {
        ...state,
        blogID: action.payload,
      }

    //is Loading id
    case 'GET_BLOG_ID_REQUEST':
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    case 'GET_BLOG_ID_REQUEST_AFTER':
      return {
        ...state,
        isLoading: false
      }
    
    
    default:
      return state;
  }
}

export default handleBlog;


