import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
          <article className="note">
            <input type="text" value="Title" className="note__title" />
            <textarea value="Description..." className="note__description" />
          </article>
    );
  }
}

export default Note;
