import React, { Component, Fragment } from 'react';
import { getNewNote, updateDisplayValues } from './helpers';
import Header from './Header';
import Notes from './Notes';
class App extends Component {
  state = {
    notes: [getNewNote()],
    searchText: '',
    searchBy: 'Title',
  };
  addNew = () => {
    const notes = [getNewNote(), ...this.state.notes];
    this.setState({ notes });
  };
  onType = (editMeId, updatedProperty, value) => {
    const notes = this.state.notes.map(note => {
      if (note.id !== editMeId) return note;
      return { ...note, [updatedProperty]: value };
    });
    this.setState({ notes });
  };
  remove = deleteMeId => {
    const notes = this.state.notes.filter(note => note.id !== deleteMeId);
    this.setState({ notes });
  };
  onSearch = e => {
    const searchText = e.target.value;
    const notes = updateDisplayValues({ ...this.state, searchText });
    this.setState({ searchText, notes });
  };
  updateSearchBy = e => {
    const searchBy = e.target.value;
    const notes = updateDisplayValues({ ...this.state, searchBy });
    this.setState({ searchBy, notes });
  };
  render() {
    const { notes, searchText, searchBy } = this.state;
    return (
      <Fragment>
        <Header
          addNew={this.addNew}
          searchText={searchText}
          searchBy={searchBy}
          onSearch={this.onSearch}
          updateSearchBy={this.updateSearchBy}
        />
        <Notes
          notes={notes}
          onType={this.onType}
          remove={this.remove}
          move={this.move}
        />
      </Fragment>
    );
  }
}

export default App;
