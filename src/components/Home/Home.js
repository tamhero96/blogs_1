import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { allBlogs } from "../../redux/actions/blogs";
import { Link } from "react-router-dom";

const Home = () => {
  const getallBlogs = useSelector((state) => state.blogs.Blogs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allBlogs())
  }, [dispatch]);
  return (
    <div style={main}>
      {getallBlogs.map((value, id) => {
        return (
          <div key={id} className="article">
            <div className="title">
              <Link to={`/blog/${value.id}`}>{value.title}</Link>
            </div>
            <div className="subtitle">{value.body}</div>
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(Home)

const main = {
  margin: '20px 15px'
}