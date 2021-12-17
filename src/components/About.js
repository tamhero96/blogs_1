import React, {useState,useEffect} from "react";
import { useSelector, useDispatch} from 'react-redux';
import { fetchAll } from "../redux/actions/postBlogs";

const About = () => {
  const reduxData = useSelector((state) => state.blogs.list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])
 
  return (
      <div>
        {reduxData.map((value,id) => {
          return (
            <div key={id}>
              {value.title}
            </div>
          )
        })}
      </div>
  )
}

export default React.memo(About);;