import styled from "styled-components";

export const ToDoContainer = styled.div`
  width: calc(90% - 20px);
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #EF7FA7;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ToDoAddTaskContainer = styled.div`
  width: calc(50% - 20px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ToDoTitle = styled.h1`
  font-size: 2em;
  color: ${props => props.color || '#BF4F74'};
`;

export const ToDoInput = styled.input`
  width: 40%;
  padding: 5px;
  margin: 5px;
  border: 1px solid #BF4F74;
  border-radius: 4px;
  color: papayawhip;
  font-size: 1em;
  @media (max-width: 767px){
    width: calc(90% - 20px);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`;

export const ButtonTodo = styled.button`
  padding: 0.5em;
  background-color: #BF4F74;
  border: 0.1em solid #BF4F74;
  color: papayawhip;
  font-size: 1em;
  border-radius: 0.25em;
  margin: 0.25em;
 
  cursor: pointer;
  box-shadow: none;

  &:hover {
    background-color: transparent;
    color: #BF4F74;
  }
`;

export const ToDoValues = styled.p`
  font-size: 1em;
  padding: 0.5em;
  color: #BF4F74;
`;