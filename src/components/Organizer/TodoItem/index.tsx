// src/components/TodoItem.tsx
import React from 'react';
import styled from 'styled-components';
import { ButtonTodo, ToDoValues } from '../styles';

interface TodoItemProps {
  task: string;
  onDelete: () => void;
}

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 8px 0;
`;

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete }) => {
  return (
    <ListItem>
      <ToDoValues>{task}</ToDoValues>
      <ButtonTodo onClick={onDelete}>Delete</ButtonTodo>
    </ListItem>
  );
};

export default TodoItem;