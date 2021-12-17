import api from './api'


export const fetchAll = () => dispatch => {
  api.postBlog().fetchAll()
    .then(res => {
      dispatch({
        type: 'FETCH_ALL',
        payload: res.data,
      })
      
    })
    .catch(err => console.log(err))
}
