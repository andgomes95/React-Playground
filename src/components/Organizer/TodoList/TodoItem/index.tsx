// src/components/TodoItem.tsx
import React from 'react';
import styled from 'styled-components';
import { ToDoValues } from '../styles';
import { DefaultButton } from '../../../DefaultComponents/styles';

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
      <DefaultButton onClick={onDelete}>Delete</DefaultButton>
    </ListItem>
  );
};

export default TodoItem;