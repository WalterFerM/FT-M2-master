import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  function forOnsearch() {
    if(typeof onSearch === 'function'){
      const input= document.getElementById("search-input");
      onSearch(input.value);
    }
  }
  return (<div>
    <input type="text" id="search-input" />
    <button onClick={forOnsearch}>Agregar</button>
  </div>)
};