import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  // dy9A9TuBSMepBEzD93k76CCrs1247Unr
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    if (categories.includes(newCategory)) return;

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
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => {
        return <GifGrid category={category} key={category} />;
      })}
    </>
  );
};
