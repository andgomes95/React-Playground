// src/components/TodoItem.tsx
import React from 'react';
import styled from 'styled-components';
import { ToDoValues } from '../styles';
import { OrganizerButton } from '../../styles';

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
      <OrganizerButton onClick={onDelete}>Delete</OrganizerButton>
    </ListItem>
  );
};

export default TodoItem;