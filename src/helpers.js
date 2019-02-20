let id = 0;

export const getNewNote = () => ({
  title: '',
  description: '',
  display: true,
  id: id++,
});

export const updateDisplayValues = ({ notes, searchText, searchBy }) =>
  notes.map(note => {
    const titleMatch = note.title.includes(searchText);
    const descriptionMatch = note.description.includes(searchText);

    if (!searchText) {
      return { ...note, display: true };
    } else if (searchBy === 'Title') {
      return { ...note, display: titleMatch };
    } else if (searchBy === 'Description') {
      return { ...note, display: descriptionMatch };
    } else {
      return { ...note, display: titleMatch || descriptionMatch };
    }
  });
