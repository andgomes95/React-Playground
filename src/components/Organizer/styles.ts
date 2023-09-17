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