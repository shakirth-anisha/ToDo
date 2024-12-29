import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
    return (
        <li className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
            <div className="w-32 h-32 mb-4">
                <img
                    className="todo-image w-full h-full rounded"
                    src={todo.image || 'https://placehold.co/128x128?text=No+Image'}
                    alt="Todo"
                />
            </div>
            <h3 className="todo-title text-lg font-bold mb-2">{todo.title}</h3>
            <p className="todo-subtitle text-gray-600 mb-4">{todo.subtitle}</p>
            <div className="flex items-center">
                <button onClick={onEdit} className="text-blue-500 mr-2 text-xl">
                    <i className="fas fa-edit"></i>
                </button>
                <button onClick={onDelete} className="text-red-500 text-xl">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
