import React, {useState} from "react";

function SearchBar({toggleSort, filterList}) {

  const [isClicked, setIsClicked] = useState(false)
  const [isClicked1, setIsClicked1] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const handleClick1 = () => {
    setIsClicked1(!isClicked1)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={isClicked}
          onChange={e => toggleSort(e.target.value)}
          onClick= {handleClick} 
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={isClicked1}
          onChange={e => toggleSort(e.target.value)}
          onClick= {handleClick1} 
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={e => filterList(e.target.value)}>
          <option value=""></option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
