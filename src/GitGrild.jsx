// Challenge 4
import React, { useEffect, useState } from "react";
import {Item} from "./Item";
import { getGifs } from "./getGifs";

export const GitGrild = ({ category }) => {
  const [images, setImages] = useState([]);


  const getImages = async() => {
    const images = await getGifs(category)
    setImages (images);

  }

  useEffect( () => {
    getImages();
  }, [])
  

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <Item key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};


