import React from 'react';
import Styles from './styles/SearchBar.module.css'


export default function SearchBar({onSearch}) {

function handleOnSearch () {
    if(typeof onSearch === 'function'){
      const input = document.getElementById('search-input');
      onSearch(input.value);
    }
  }

  return (
    <div className={Styles.Search}>
      <input type="text" placeholder="Search" id="search-input"/>
      <button onClick={handleOnSearch} className={Styles.Btn}>Agregar</button>
    </div>)
};

