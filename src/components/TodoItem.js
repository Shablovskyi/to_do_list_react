import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <li className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm">
      <span
          onClick={() => toggleComplete(todo.id)}
          className={`cursor-pointer flex-grow ${
              todo.completed ? 'line-through text-gray-500' : ''
          }`}
      >
        {todo.text}
      </span>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
            >
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
