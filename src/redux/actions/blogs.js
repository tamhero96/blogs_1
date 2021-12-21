import api from './api'

export const allBlogs = () => dispatch => {
  console.log(api.blogs().allBlogs())
  api.blogs().allBlogs()
    .then(res => {
      dispatch({
        type: 'ALL_BLOGS',
        payload: res.data.blogs,
      })
    })
    .catch(err => console.log(err))
}

export const idBlog = (id) => dispatch => {
  dispatch({
    type: 'LOADING_ID_BLOG',
    payload: true,
  })
  api.blogs().idBlog(id)
    .then(res => {
      dispatch({
        type: 'ID_BLOG',
        payload: {
          data: res.data.blogs,
          setLoading: false,
        },
      })
    })
    .catch(err => console.log(err))
}
