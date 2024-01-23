import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpectApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
  ]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;

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

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
      
    </>
  );
};
