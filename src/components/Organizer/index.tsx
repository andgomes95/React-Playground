// src/components/TodoList.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { ButtonTodo, ToDoAddTaskContainer, ToDoContainer, ToDoInput, ToDoTitle } from './styles';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Organizer: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <ToDoContainer>
      <ToDoTitle color='#000000'>Todo List</ToDoTitle>
      <ToDoAddTaskContainer>
        <ToDoInput
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <ButtonTodo onClick={handleAddTask}>Add</ButtonTodo>
      </ToDoAddTaskContainer>
      <List>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </List>
    </ToDoContainer>
  );
};

export default Organizer;