import styled from "styled-components";

export const SortingTextArea = styled.textarea`
  width: 70%;
  height: 20vh;
  padding: 5px;
  margin: 5px;
  border: 1px solid #BF4F74;
  border-radius: 4px;
  color: #BF4F74;
  font-size: 1em;
  display: flex;
  justify-content: center;
  @media (max-width: 767px){
    width: calc(90% - 20px);
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SortingData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SortingItem = styled.div`
  color: #BF4F74;
  padding: 10px;
`;