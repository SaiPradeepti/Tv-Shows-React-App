import { useState,useEffect } from 'react'
import client from './client'
import Shows from './shows'
import GenreCategory from './genreCategory'

function App() {
  const [data,setData] = useState([]);
  const [categorisedData,setCategorisedData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [filter,setFilter] = useState('all');
  const assignFilter = (newfilter) => {
    setFilter(newfilter);
  }
  
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
        setData(newData);
        setCategorisedData(data);
        setLoading(false);
      } 
      catch (error) {
          console.log(error)
      }
    }
  
  // Loading data, runs once at page load
  useEffect(() => {    
    fetchData();
    setCategorisedData(data);
  }, [])

  // Categorising data based on filter choosen
  // runs whenever a filter is chosen
  useEffect(() => {
    if(filter === 'all'){
      setCategorisedData(data);
    }
    else if(filter !== 'all'){
      const newData = data.filter(item => item.genre.search(filter) !== -1);
      setCategorisedData(newData);
    }
  }, [filter,data]);

  if (loading){
    return <h1>Loading...</h1>;
  } else{  
    const allGenre = ['all',...data.map(item => item.genre)];
    let newAllGenre = [];
    allGenre.forEach(item => {
      newAllGenre.push(...item.split(', '));
    });
    newAllGenre = new Set(newAllGenre);

    return (
      <>
        <h2>Popular tv shows</h2>
        <main>
          <div className="genreCategory">
            <GenreCategory allGenre={newAllGenre} assignFilter={assignFilter}/>
          </div>
          <div className="show-container">
            <Shows data={categorisedData} />
          </div>
        </main>    
      </>
    );
  }
}

export default App;
