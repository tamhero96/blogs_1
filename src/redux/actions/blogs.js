import axios from 'axios'
const baseUrl = 'http://localhost:4000/api/v1/blogs'


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