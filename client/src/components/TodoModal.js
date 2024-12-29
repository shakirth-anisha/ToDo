import React, { useState, useEffect } from 'react';

const TodoModal = ({ isOpen, todo, closeModal, saveTodo }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('No file chosen');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setSubtitle(todo.subtitle || '');
      setImage(todo.image || null);
      setImageName(todo.image ? 'Image selected' : 'No file chosen');
    }
  }, [todo]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImageName(file ? file.name : 'No file chosen');
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageName('No file chosen');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todo ? todo.id : null,
      title,
      subtitle,
      image: image ? URL.createObjectURL(image) : null,
    };
    saveTodo(newTodo);
    clearForm();  
  };

  const clearForm = () => {
    setTitle('');
    setSubtitle('');
    setImage(null);
    setImageName('No file chosen');
  };

  const handleClose = () => {
    closeModal();
    clearForm(); 
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">{todo ? 'Edit Todo' : 'Add Todo'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-2 border rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700">Image</label>
              <div className="flex items-center">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="image"
                  className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Choose File
                </label>
                <span className="ml-4 text-gray-600">{imageName}</span>
              </div>
            </div>
            {image && (
              <div className="mb-4">
                <button
                  type="button"
                  className="text-red-500"
                  onClick={handleRemoveImage}
                >
                  Remove Image
                </button>
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="subtitle" className="block text-gray-700">Subtitle</label>
              <input
                type="text"
                id="subtitle"
                className="w-full px-4 py-2 border rounded-lg"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleClose} 
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default TodoModal;
