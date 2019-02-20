import React, { Component, Fragment } from 'react';
import { getNewNote } from './helpers';
import Header from './Header';
import Note from './Note';
class App extends Component {
  state = { notes: [getNewNote()] };
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
  render() {
    const { notes } = this.state;
    return (
      <Fragment>
        <Header addNew={this.addNew} />
        <main>
          {notes.map((note, index) => (
            <Note
              note={note}
              index={index}
              key={note.id}
              onType={this.onType}
              remove={this.remove}
            />
          ))}
        </main>
      </Fragment>
    );
  }
}

export default App;
