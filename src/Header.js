import React from 'react';

const Header = ({ addNew }) => (
  <header>
    <h1 className='app-header'>Super Sticky Notes</h1>
    <aside>
      <input type='text' value='Search...' className='search' />
      <button onClick={addNew} className='add-new'>
        + New Note
      </button>
    </aside>
  </header>
);

export default Header;
