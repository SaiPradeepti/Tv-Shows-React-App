import { useState,useEffect } from 'react'
import client from './client'
import Shows from './shows'

function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const fetchData = async() => {
      try {
        const response = await client.getEntries({'content_type': 'popularTvShows'});
        const responseData = await response.items;
        const newData = responseData.map(item => {
          return {
            title: item.fields.title,
            image: item.fields.image.fields.file.url,
            year: item.fields.year,
            description: item.fields.description,
            genre: item.fields.genre
          }
        });
        // console.log(newData);
        setData(newData);
        setLoading(false);
      } 
      catch (error) {
          console.log(error)
      }
    }
  
  useEffect(() => {    
    fetchData();    
  }, [])
  if (loading){
    return <h1>Loading...</h1>;
  } else{
    return (
      <>
        <h2>Popular tv shows</h2>
        <main>
            <div className="show-container">
                <Shows data={data} />
            </div>
        </main>    
      </>
    );
  }
}

export default App;
