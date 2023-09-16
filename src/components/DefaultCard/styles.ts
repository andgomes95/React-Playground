import styled from 'styled-components';

export const DefaultCard = styled.div`
 width: calc(30% - 20px); /* Define a largura das colunas, com margens à esquerda e à direita */
  margin: 10px; /* Adiciona espaçamento entre os cards */
  padding: 1em;
  border: 1px solid #ccc;
  background: #BF4F74;
  border-radius: 1em;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px){
    width: calc(90% - 20px);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`;

export const TitleCard = styled.h2`
  font-size: 1.5em;
  color: papayawhip;
  display: flex;
  @media (max-width: 767px){
    justify-content: center;
  }
`;

export const DescriptionCard = styled.p`
  font-size: 1em;
  color: #FFF;
`;

export const InputCard = styled.input`
  width: 40%;
  padding: 5px;
  margin: 5px;
  border: 1px solid papayawhip;
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

export const ButtonConfirmCard = styled.button`
  padding: 0.5em;
  background-color: papayawhip;
  border: 0.1em solid papayawhip;
  color: #BF4F74;
  font-size: 1em;
  border-radius: 0.25em;
  margin: 0.25em;
 
  cursor: pointer;
  box-shadow: none;

  &:hover {
    background-color: transparent;
    color: papayawhip;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 767px){
    justify-content: center;
  }
`;