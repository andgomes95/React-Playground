import styled from "styled-components";

export const DefaultButton = styled.button`
  padding: 0.5em;
  background-color: ${props => props.color === 'selected' ? '#EF7FA7' : '#BF4F74'};
  border: 0.1em solid #BF4F74;
  color: ${props => props.color === 'selected' ? 'black' : 'papayawhip'};
  font-size: 1em;
  border-radius: 0.25em;
  margin: 0.25em;
 
  cursor: pointer;
  box-shadow: none;

  &:hover {
    background-color: ${props => props.color === 'selected' ? '#8C1C41' : 'transparent'};
    color:${props => props.color === 'selected' ? '#BF4F74' : '#8C1C41'};
  }
`;