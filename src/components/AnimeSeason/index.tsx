import { useEffect, useState } from "react";
import { CardContainer } from "../DefaultCard/styles";
import SearchInput from "../SearchInput";
import AnimeSeasonCard from "./AnimeSeasonCard";
import axios from 'axios';
import { Themes } from "./utils";

interface Anime {
  "title": string,
  "images": any,
  "synopsis": string,
  "episodes": number,
  "season": string,
  "year": string,
  "source": string,
  "studio": any,
  "youtube": any,
  "themes": Themes[],
  "demographics": Themes[],
  "genres": Themes[],
  "mal_id": number
}


function AnimeSeason() {
  const [animes, setaAnimes] = useState<Anime[]>([]);
  const [searchAnime, setSearchAnime] = useState<Anime[]>([]);

  useEffect(() => {
    async function fetchGet() {
      try {
        const animesAux = await axios.get('https://api.jikan.moe/v4/seasons/upcoming');
        setaAnimes(animesAux.data.data);
        setSearchAnime(animesAux.data.data);
      } catch (error) {
        console.error('Erro ao buscar os posts:', error);
      }
    }
    fetchGet();
  }, [])

  return (
    <CardContainer>
      <SearchInput
        type="text"
        placeholder="Busque um anime"
        onBlur={(e) => {
          const typeText = e.target.value;
          const result = animes.filter((anime) => anime.title.includes(typeText))
          setSearchAnime(result);
          console.log(searchAnime);
        }}
      />
      {searchAnime.map((anime) => {
        let themes = [...anime.themes, ...anime.genres,...anime.demographics ];
        return (<>
        <AnimeSeasonCard 
            title={anime.title}
            episodes={anime.episodes}
            urlImage={anime.images.jpg.large_image_url}
            synopsis={anime.synopsis}
            themes={themes} 
            id={anime.mal_id}        
          />
          </>)
      })}
    </CardContainer>
  );
}

export default AnimeSeason;