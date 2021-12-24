import axios from 'axios'
const baseUrl = 'http://localhost:4000/api/v1/blogs'

// get all blogs
const getBlogsSuccess = (blogs) => {
  return {
    type: 'GET_BLOGS',
    payload: {
      blogs
    },
  }
}

export const getAllBlogs = () => {
  return function (dispatch) {
    axios({
      method: 'get',
      url: '/',
      baseURL: baseUrl,
    })
    .then((res) => {
      const data = res.data.blogs
      dispatch(getBlogsSuccess(data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

// get blog by ID
const getBlogIDSuccess = ((blog) => {
  return {
    type: 'GET_BLOG_ID_SUCCESS',
    payload: {
      blog,
    }
  }
})

const getBlogIDRequest = ((value) => {
  return {
    type: 'GET_BLOG_ID_REQUEST',
    payload: {
      isLoading: value
    }
  }
})

export const getBlogID = (ID) => {
  return function (dispatch) {
    dispatch(getBlogIDRequest(true))
    axios({
      method: 'get',
      url: `/${ID}`,
      baseURL: baseUrl,
    })
    .then((res) => {
      const data = res.data.blog
      dispatch(getBlogIDSuccess(data))
      dispatch(getBlogIDRequest(false))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}