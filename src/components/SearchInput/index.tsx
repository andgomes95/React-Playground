import styled from "styled-components"

const SearchInput = styled.input`
  width: 60%;
  padding: 5px;
  margin: 5px;
  border: 1px solid #BF4F74;
  border-radius: 50px;
  color: #BF4F74;
  font-size: 1.5em;
  @media (max-width: 767px){
    width: calc(90% - 20px);
    display: flex;
    flex-direction: column;
  }
  &::placeholder {
    color: #EF7FA7;
    text-align: center;
  }
`

export default SearchInput;