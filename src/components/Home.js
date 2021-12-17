import axios from "axios";
import React, { useState, useEffect} from 'react';
import {
  Link
} from 'react-router-dom';



const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(false);
      try {
        const {data: res} = await axios.get('/api/v1/blogs');
        setData(res);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        {data?.blogs?.map(item => (
          <ul key={item._id}>
            <Link to={`/${item._id}`}>{item.title}</Link>
            <div>{item.author}</div>
          </ul>
        ))}
      </div>
    )}
    </div>
  )
}

export default Home
