import React from 'react';
import { TaskContext } from '../context/TaskContext';
import { useState, useContext } from 'react';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask(title, description);
    setTitle('');
    setDescription('');
  };

  const handleClick = () => {
    document.getElementById('form').reset();
  };

  return (
    <div className="max-w-md mx-auto">
      <form id="form" onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
        <h1 className="text-2xl font-bold text-white mb-3">Agregá una nueva tarea</h1>
        <input type="text" placeholder="Escriba su tarea" onChange={handleChange} autoFocus className="bg-slate-300 p-3 w-full mb-2" />
        <textarea name="" id="" cols="35" rows="2" onChange={handleDescription} className="bg-slate-300 p-3 w-full mb-2"></textarea>
        <button onClick={handleClick} className="bg-indigo-500 px-2 py-1 text-white">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
