import React, { Component } from 'react';

class Note extends Component {
  updateTitle = e => {
    const { onType, note } = this.props;
    onType(note.id, 'title', e.target.value);
  };
  updateDescription = e => {
    const { onType, note } = this.props;
    onType(note.id, 'description', e.target.value);
  };
  onDeleteClick = () => {
    const { remove, note } = this.props;
    remove(note.id);
  };
  render() {
    const { title, description } = this.props.note;
    return (
      <article className='note'>
        <input
          type='text'
          value={title}
          onChange={this.updateTitle}
          placeholder='Title'
          className='note__title'
        />
        <textarea
          value={description}
          onChange={this.updateDescription}
          placeholder='Description...'
          className='note__description'
        />
        <span onClick={this.onDeleteClick} className='note__delete'>
          X
        </span>
      </article>
    );
  }
}

export default Note;
