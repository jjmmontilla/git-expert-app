import { PropTypes } from "prop-types";
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputVal, setInputVal] = useState('');

  const onInputChange = ({target}) => {
    setInputVal(target.value);
  } 

  const onSubmit = (event) => {
    event.preventDefault();
    const val = inputVal.trim();
    if (val.length <= 1) return;
    onNewCategory(val);
    setInputVal('');
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <div>
        <input type='text' 
          placeholder='Bucar Gifs' 
          value={inputVal} 
          onChange={onInputChange} />
      </div>
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
