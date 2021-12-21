import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { allBlogs } from "../../redux/actions/blogs";
import { Link } from "react-router-dom";

const Home = () => {
  const getallBlogs = useSelector((state) => state.blogs.Blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allBlogs())
  }, [dispatch]);
  return (
      <div>
        {getallBlogs.map((value,id) => {
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

// const main = {
//   margin: '0px 30px'
// }