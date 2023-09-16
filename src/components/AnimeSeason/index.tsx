import { useState } from "react";
import { CardContainer } from "../DefaultCard/styles";
import SearchInput from "../SearchInput";
import AnimeSeasonCard from "./AnimeSeasonCard";


function AnimeSeason() {
  const animes: string[] = ["aaaa","baa","ccc","dcc"]
  const [searchAnime, setSearchAnime] = useState<string[]>([])
  return (
  <CardContainer>
    <SearchInput 
      type="text" 
      placeholder="Busque um anime" 
      onBlur={(e)=>{
        const typeText = e.target.value;
        const result = animes.filter((anime)=>anime.includes(typeText))
        setSearchAnime(result);
        console.log(searchAnime);
      }}
    />
    {searchAnime.map((anime)=><AnimeSeasonCard title={anime}/>)}
  </CardContainer>
  );
}

export default AnimeSeason;