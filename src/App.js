import { useState,useEffect } from 'react'
import client from './client'

function App() {
  const [data,setData] = useState([]);
  const fetchData = async() => {
      try {
        const response = await client.getEntries();
        const responseData = await response.items;
        setData(responseData);
      } 
      catch (error) {
          console.log(error)
      }
    }
  
  useEffect(() => {    
    fetchData();    
  }, [])
  console.log(data);
  return (
    <>
      
    </>
  );
}

export default App;
