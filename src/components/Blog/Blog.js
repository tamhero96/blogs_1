import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { idBlog } from "../../redux/actions/blogs";
import {Link, useParams} from 'react-router-dom';

function Blog() {
  const params = useParams()
  const getIdBlog = useSelector((state) => state.blogs.idBlogs)
  const isLoading = useSelector((state) => state.blogs.setLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    if (params.id) {
      dispatch(idBlog(params.id))
    }
  },[]);
  console.log(getIdBlog)
  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <div>
            {getIdBlog.map((value, id) => {
              return (
                <div key={id} className="article">
                  <h1>{value.title}</h1>
                  <main>
                    <div className="article">
                      <div className="content">
                        {value.content}
                      </div>
                    </div>
                  </main>
                </div>
              )
            })}
          </div>
        </div>
      )}
      <Link to="/">Back HomePage</Link>
    </div>
  );
}

export default Blog
