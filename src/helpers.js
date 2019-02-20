let id = 0;

export const getNewNote = () => ({
  title: '',
  description: '',
  id: id++,
});
