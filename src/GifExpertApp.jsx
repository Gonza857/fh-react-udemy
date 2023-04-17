import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  // dy9A9TuBSMepBEzD93k76CCrs1247Unr
  const [categories, setCategories] = useState(["One Punch", "Messi"]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);

    // TRATAR DE NO USAR PUSH, PORQUE MUTA, Y REACT TRATA DE NO MUTAR
    // let copyCategories = [...categories]
    // copyCategories.push(newCategory)
    // setCategories(copyCategories)

    // OPCION 1
    // setCategories([...categories, newCategory]);

    // OPCION 2
    setCategories((cat) => [...cat, newCategory]);
  };

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* input */}
      {/* "ON" es cuando emite algo (evento) */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* listado de gif */}
      <ol>
        {categories.map((category, i) => {
          return <li key={i}>{category}</li>;
        })}
      </ol>
      {/* gif item */}
    </>
  );
};
