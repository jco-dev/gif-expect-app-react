import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpectApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
    "Samurai X",
  ]);

  const onAddCategory = ( newCategory) => {
    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories(cats => [...cats, 'Valorant']);
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpectApp</h1>

      {/* input */}
      <AddCategory
        // setCategories={setCategories} 
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* Listado Gifs */}


      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
