import React from 'react';

const Header = ({ addNew, searchText, searchBy, updateSearchBy, onSearch }) => (
  <header>
    <h1 className='app-header'>Super Sticky Notes</h1>
    <aside>
      <input
        type='text'
        placeholder='Search...'
        value={searchText}
        onChange={onSearch}
        className='search'
      />
      <span>Search By: </span>
      <select value={searchBy} onChange={updateSearchBy}>
        <option value='Title'>Title</option>
        <option value='Description'>Description</option>
        <option value='Both'>Both</option>
      </select>
      <button onClick={addNew} className='add-new'>
        + New Note
      </button>
    </aside>
  </header>
);

export default Header;
