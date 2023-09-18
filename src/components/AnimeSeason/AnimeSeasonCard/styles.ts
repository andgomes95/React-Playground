import styled from 'styled-components';

export const AnimeSeasonCardContainer = styled.div`
  width: calc(90% - 20px);
    display: flex;
    flex-direction: row;
    align-items: stretch;

    margin: 10px;
    padding: 1em;
    border: 1px solid #ccc;
    background: #BF4F74;
    border-radius: 1em;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 767px){
      flex-direction: column;
    }
`;

export const AnimeSeasonCardHeadContainer = styled.div`
  width: calc(20% - 20px);
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  @media (max-width: 767px){
    width: calc(90% - 20px);
    }
`;

export const AnimeSeasonCardInfoContainer = styled.div`
  width: calc(90% - 20px);
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: papayawhip;
  justify-content: center;
  @media (max-width: 767px){
    width: calc(90% - 20px);
    }
`;

export const AnimeSeasonTitle = styled.a`
  font-size: 2em;
  color: papayawhip;
  display: flex;
  text-decoration: none;
`;

export const AnimeSeasonTagItem = styled.div`
  font-size: 0.75em;
  padding: 0.5em;
  border-radius: 0.25em;
  background-color: white;
  color: black;
  margin: 0.5em;
`;

export const AnimeSeasonTags = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  text-decoration: none;
`;

export const AnimeSeasonSynopsis = styled.div`
    width: calc(90% - 20px);
    margin: 10px;
    padding: 1em;
    border-radius: 1em;
    background: papayawhip;
    color: black;
`;