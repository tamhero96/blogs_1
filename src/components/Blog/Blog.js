import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { idBlog } from "../../redux/actions/blogs";
import {
  Link, useParams
} from 'react-router-dom';

function Blog() {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch()
  
  useEffect(() => {
    setIsLoading(true);
    if (params.id) {
      
      dispatch(idBlog(params.id))
    }
    setIsLoading(false);
  }, [params.id]);
  const getIdBlog = useSelector((state) => state.blogs.idBlogs)
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
                        {value.body}
                      </div>
                    </div>
                  </main>
                </div>
              )
            })}
          </div>
          <Link to="/">Back HomePage</Link>
        </div>
      )}
      {/* <div>
        {getIdBlog.map((value, id) => {
          return (
            <div key={id} className="article">
              <h1>{value.title}</h1>
              <main>
                <div className="article">
                  <div className="content">
                    {value.body}
                  </div>
                </div>
              </main>
            </div>
          )
        })}
      </div>
      <Link to="/">Back HomePage</Link> */}
    </div>
  );
}

export default Blog
