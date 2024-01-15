import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpectApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
    "Samurai X",
  ]);

    const handleAdd = () => {
        setCategories(['Valorant', ...categories ]);
        // setCategories(cats => [...cats, 'Valorant']);
    }

  return (
    <>
      {/* titulo */}
      <h1>GifExpectApp</h1>

      {/* input */}
      <AddCategory setCategories={setCategories} />

      {/* Listado Gifs */}


      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
