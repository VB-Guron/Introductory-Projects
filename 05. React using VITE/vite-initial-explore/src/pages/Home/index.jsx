import React, { useContext } from "react";
import { ImagesDataBase } from "../../App";

const Home = () => {
  const images = useContext(ImagesDataBase);

  return (
    <>
      {images.map((image, index) => {
        return <div key={index}>{image.name}</div>;
      })}
    </>
  );
};

export default Home;
