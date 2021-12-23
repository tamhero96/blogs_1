import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getAllBlogs } from "../../redux/actions/blogs";
import { Link } from "react-router-dom";

const Home = () => {
  const allBlogs = useSelector((state) => state.getAllBlogs.allblogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs())
  }, [dispatch]);
  return (
    <div>     
      {allBlogs?.blogs?.map((value,id) => {
        return (
          <div key={id}>
            <div>{id+1}</div>
            <Link to={`blog/${value._id}`}>{value.title}</Link>
            <span> </span>
            <Link to={`user/${value.author}`}>{value.author}</Link>
          </div>
        )
      })}
    </div>    
  )
}

export default React.memo(Home)
