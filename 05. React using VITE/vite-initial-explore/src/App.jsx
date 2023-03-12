import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
React;

export const ImagesDataBase = React.createContext();

function App() {
  const [count, setCount] = useState(0);

  const [images, setImages] = useState([
    {
      name: "image1",
      url: "image",
      object: "yes",
    },
    {
      name: "image2",
      url: "image2",
      object: "yes2",
    },
    {
      name: "image3",
      url: "image3",
      object: "yes3",
    },
    {
      name: "image4",
      url: "image4",
      object: "yes4",
    },
  ]);

  return (
    <>
      <ImagesDataBase.Provider value={images}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ImagesDataBase.Provider>
    </>
  );
}

export default App;
