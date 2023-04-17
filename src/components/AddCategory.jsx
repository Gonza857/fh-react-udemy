import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Mercedes");

  const onInputChange = (e) => {
    // Contenido actual del formulario
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories((cat) => [...cat, inputValue]);
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar GIF's"
        value={inputValue}
        onChange={(e) => {
          onInputChange(e);
        }}
      />
    </form>
  );
};
