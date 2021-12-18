import api from './api'

export const allBlogs = () => dispatch => {
  api.blogs().allBlogs()
    .then(res => {
      dispatch({
        type: 'ALL_BLOGS',
        payload: res.data,
      })
    })
    .catch(err => console.log(err))
}

export const idBlog = (id) => dispatch => {
  api.blogs().idBlog(id)
    .then(res => {
      dispatch({
        type: 'ID_BLOG',
        payload: res.data,
      })
    })
    .catch(err => console.log(err))
}
