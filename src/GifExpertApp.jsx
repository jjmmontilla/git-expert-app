import { useRef, useState } from "react";
import { AddCategory, GifGrid } from "./components";
//import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }
  
  return (
    <>
      {/**Titulo */}
      <h2>GifExpertApp</h2>

      {/**Input */}
      <AddCategory
        onNewCategory={ value => onAddCategory(value) } />
      
      {/**Listado de Gif */}
      <ol>
        { 
          categories.map(element => (< GifGrid key={element} category={element} />))
        }
      </ol>
    </>
  )
}
