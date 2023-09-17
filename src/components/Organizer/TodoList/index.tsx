// src/components/TodoList.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { ToDoAddTaskContainer, ToDoInput } from './styles';
import { OrganizerButton, OrganizerContainer, OrganizerTitle } from '../styles';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ToDoList: React.FC = () => {
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
    <OrganizerContainer>
      <OrganizerTitle>Todo List</OrganizerTitle>
      <ToDoAddTaskContainer>
        <ToDoInput
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <OrganizerButton onClick={handleAddTask}>Add</OrganizerButton>
      </ToDoAddTaskContainer>
      <List>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </List>
    </OrganizerContainer>
  );
};

export default ToDoList;