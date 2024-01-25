import { useEffect, useState } from "react";

const Fetch = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((newdata) => {
        setPhotos(newdata);
      })
      
  }, []);

  return (
    <div>
      {photos.slice(0, 20).map((photo) => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} width={100} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
