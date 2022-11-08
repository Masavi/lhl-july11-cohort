import { useEffect, useState } from 'react';
import axios from 'axios';

function RandomCatImage() {
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GET REQUEST GOES HERE!
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        const url = response.data[0].url;
        setImageURL(url);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [])

  return (
    <>
      <h2>Random Cat Image ☕️</h2>
      { 
        loading
          ? (<p>Loading image...</p>)
          : (<img alt="random cat image" src={imageURL} />)
      }
      
    </>
  );
}

export default RandomCatImage;