import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get('/v2/list');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <button onClick={getImages} className="bg-blue-500 text-white px-4 py-2 mb-4 rounded">
        Load Images
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <img key={image.id} src={image.download_url} alt={image.author} className="w-full h-auto rounded shadow" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
