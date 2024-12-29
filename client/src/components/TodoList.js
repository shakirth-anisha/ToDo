import React from 'react';

const TodoList = ({ todos, openModal }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {todos.map((todo) => (
        <li key={todo.id} className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <div className="w-32 h-32 mb-4 relative">
            <img
              src={todo.image || 'https://placehold.co/128x128?text=No+Image'}
              alt="Todo"
              className="w-full h-full rounded"
            />
          </div>
          <h3 className="text-lg font-bold mb-2">{todo.title}</h3>
          <p className="text-gray-600 mb-4">{todo.subtitle}</p>
          <div className="flex items-center">
            <button
              onClick={() => openModal(todo)}
              className="text-blue-500 mr-2 text-xl"
            >
              <i className="fas fa-edit"></i>
            </button>
            <button
              onClick={() => openModal(todo)}
              className="text-red-500 text-xl"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
