import React, { useState } from 'react';
import TodoModal from './components/TodoModal';
import { PencilIcon, TrashIcon, CheckIcon, XIcon } from '@heroicons/react/solid';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const openModal = (todo = null) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTodo(null);
    setIsModalOpen(false);
  };

  const saveTodo = (todo) => {
    if (todo.id) {
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } else {
      const newTodo = { ...todo, id: Date.now() };
      setTodos([...todos, newTodo]);
    }
    closeModal();
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Todo App</h1>
          <button
            className="bg-blue-500 text-white p-3 rounded-full"
            onClick={() => openModal()}
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`p-4 rounded-lg shadow flex flex-col items-center ${
                todo.done
                  ? 'bg-green-500 text-white opacity-75 line-through'
                  : 'bg-white opacity-100'
              }`}
            >
              <div className="w-32 h-32 mb-4 relative">
                <img
                  className="w-full h-full rounded"
                  src={todo.image || 'https://placehold.co/128x128?text=No+Image'}
                  alt="Todo"
                />
              </div>
              <h3 className="todo-title text-lg font-bold mb-2">{todo.title}</h3>
              <p className="todo-subtitle text-gray-600 mb-4">{todo.subtitle}</p>
              <div className="flex items-center">
                <button
                  onClick={() => openModal(todo)}
                  className="text-blue-500 mr-2 text-xl"
                >
                  <PencilIcon className="w-12 h-6" />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 text-xl"
                >
                  <TrashIcon className="w-12 h-6" />
                </button>
                <button
                  onClick={() => toggleDone(todo.id)}
                  className="text-green-500 text-xl"
                  style={{padding:"8%"}}
                >
                  {todo.done ? (
                    <XIcon className="text-red-500 w-12 h-6" />
                  ) : (
                    <CheckIcon className="w-12 h-6" />
                  )}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <TodoModal
        isOpen={isModalOpen}
        todo={editingTodo}
        closeModal={closeModal}
        saveTodo={saveTodo}
      />
    </div>
  );
};

export default TodoApp;
