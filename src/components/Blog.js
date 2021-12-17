import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {
  Link, useParams
} from 'react-router-dom';

function Blog() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const params = useParams()

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(false);
      try {
        const {data: res} = await axios.get(`/api/v1/blogs/${params.id}`);
        setData(res);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  });
  return (
    <>
      <h2>Blog Page</h2>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h4>
          {data?.blogs?.title}
        </h4>
        <h4>
          {data?.blogs?.author}
        </h4>
        <h4>
          {data?.blogs?.content}
        </h4>
        </div>
      )}
      <Link to="/">Back HomePage</Link>
    </>
  );
}

export default Blog
