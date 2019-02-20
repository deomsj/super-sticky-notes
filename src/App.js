import React, { Component, Fragment } from 'react';
import Note from './Note';
class App extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="app-header">Super Sticky Notes</h1>
        <aside className="search-bar" >
          <input type="text" value="Search..." />
        </aside>
        <main>
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </main>
      </Fragment>
    );
  }
}

export default App;
