import React, { useEffect, useState } from 'react';

const HomePage = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5500/api/product")
      const jsonData = await res.json()
      setData(jsonData)
    }


    fetchData()
  }, []);



  return (
    <>
      <div>
        {data && data.map((item) => (
          
          <ul key={item._id}>
            <img src={item.image} alt=""  style={{width:"100px"}}/>
            <li>{item.title}</li>
            <li>{item.price}</li>
          </ul>
        ))}


      </div>
      <div>
        <header>
          <h1>My Simple React Home Page</h1>
        </header>
        <main>
          <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
          <img src="https://via.placeholder.com/300" alt="Placeholder" />
        </main>
      </div>


    </>

  );
}

export default HomePage;