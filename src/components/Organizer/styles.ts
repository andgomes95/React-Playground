import styled from "styled-components";

export const OrganizerContainer = styled.div`
  width: calc(95% - 20px);
  margin: 1em auto;
  padding: 1em;
  border: 1px solid #EF7FA7;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OrganizerTitle = styled.h1`
  font-size: 2em;
  color: ${props => props.color || '#BF4F74'};
`;

export const OrganizerButton = styled.button`
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