import React from 'react';
import { createContext, useState, useEffect } from 'react';
import {tasks as data } from "../data/tasks"


export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        title: title,
        id: tasks.length,
        description: description,
      },
    ]);
  };

  const deleteTask = (taskID) => {
    console.log(tasks);
    console.log(taskID);
    setTasks(tasks.filter((task) => task.id !== taskID));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return <TaskContext.Provider value={{tasks: tasks,
     createTask: createTask,
      deleteTask: deleteTask}}>{props.children}</TaskContext.Provider>;
}
