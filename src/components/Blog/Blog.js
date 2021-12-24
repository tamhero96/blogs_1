import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { getBlogID } from "../../redux/actions/blogs"
import {useParams,useNavigate} from 'react-router-dom'

function Blog() {
  let navigate = useNavigate();
  const params = useParams()
  const getIDBlog = useSelector((state) => state.handleBlog.blogID.blog)
  const isLoading = useSelector((state) => state.handleBlog.isLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlogID(params.id))
  },[])
 
  const handleAddComment = (event) => {
    event.preventDefault()
    if(localStorage.getItem('USER-TOKEN')){
      console.log('co')
    } else {
      navigate('/login')
    }
  }
  return (
    <div>
      {
        isLoading ? <h1>Loading......</h1> : 
          <div>
            <div>title: {getIDBlog?.title}</div>
            <div>author: {getIDBlog?.author}</div>
            <div>content: {getIDBlog?.content}</div>
            <br/>
            <div>
              <div>comments:</div>
              <textarea name="text" rows="4" cols="40"></textarea>
              <div>
                <button type="button" onClick={handleAddComment}>add comment</button>
              </div>
              <br/>
              <div>
                {getIDBlog?.comments?.map((value,id) => {
                  return (
                    <div key={id}>
                      <div>
                        name: {value.nameComment}
                      </div>
                      <div>
                        comment: {value.contentComment}
                      </div>
                      <div>
                        date: {value.date}
                      </div>
                      <br/>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
      }
    </div>
    
  )
}

export default Blog

