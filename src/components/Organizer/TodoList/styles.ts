import styled from "styled-components";

export const ToDoAddTaskContainer = styled.div`
  width: calc(50% - 20px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ToDoInput = styled.input`
  width: 40%;
  padding: 5px;
  margin: 5px;
  border: 1px solid #BF4F74;
  border-radius: 4px;
  color: #BF4F74;
  font-size: 1em;
  @media (max-width: 767px){
    width: calc(90% - 20px);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`;

export const ToDoValues = styled.p`
  font-size: 1em;
  padding: 0.5em;
  color: #BF4F74;
`;