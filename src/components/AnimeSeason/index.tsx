import { useEffect, useState } from "react";
import { CardContainer } from "../DefaultCard/styles";
import SearchInput from "../SearchInput";
import AnimeSeasonCard from "./AnimeSeasonCard";
import axios from 'axios';

interface Anime {
  "mal_id": number,
  "url": string,
  "title": string,
  "type": string,
  "start_year": number,
  "images": any
}

function AnimeSeason() {
  const [animes, setaAnimes] = useState<Anime[]>([]);
  const [searchAnime, setSearchAnime] = useState<Anime[]>([]);

  useEffect(()=>{
    async function fetchGet(){
      try {
        const animesAux = await axios.get('https://api.jikan.moe/v4/seasons/now');
        debugger
        setaAnimes(animesAux.data.data);
      }catch(error){
        console.error('Erro ao buscar os posts:',error);
      }
    }
    fetchGet();
  }, [])

  return (
  <CardContainer>
    <SearchInput 
      type="text" 
      placeholder="Busque um anime" 
      onBlur={(e)=>{
        const typeText = e.target.value;
        const result = animes.filter((anime)=>anime.title.includes(typeText))
        setSearchAnime(result);
        console.log(searchAnime);
      }}
    />
    {searchAnime.map((anime)=><AnimeSeasonCard title={anime.title} startYear={anime.start_year}/>)}
  </CardContainer>
  );
}

export default AnimeSeason;