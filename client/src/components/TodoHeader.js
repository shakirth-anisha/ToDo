import React from 'react';

const TodoHeader = ({ openModal }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <button
        onClick={() => openModal()}
        className="bg-blue-500 text-white p-3 rounded-full"
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoHeader;
