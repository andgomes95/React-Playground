import { useEffect, useState } from "react";
import { CardContainer } from "../DefaultCard/styles";
import AnimeSeasonCard from "./AnimeSeasonCard";
import axios from 'axios';
import { Pagination, Themes } from "./utils";
import { DefaultButton } from "../DefaultComponents/styles";

export interface Anime {
  "title": string,
  "images": any,
  "synopsis": string,
  "episodes": number,
  "season": string,
  "year": string,
  "source": string,
  "studios": Themes[],
  "trailer": any,
  "themes": Themes[],
  "demographics": Themes[],
  "genres": Themes[],
  "mal_id": number
}


function AnimeSeason() {
  const [searchAnime, setSearchAnime] = useState<Anime[]>([]);
   const [pagination, setPagination] = useState<Pagination>(
    {
      "last_visible_page": 1,
      "has_next_page": false,
      "current_page": 1
  });

  const handlePageChange = (newPage: number) => {
    getEspecificPage(newPage);
  };

  async function getEspecificPage(page: number){
    try {
      const animesAux = await axios.get(`https://api.jikan.moe/v4/seasons/now?page=${page}`);
      setSearchAnime(animesAux.data.data);
      setPagination(animesAux.data.pagination);
    } catch (error) {
      console.error('Erro ao buscar os posts:', error);
    }
  }

  const printPaginationItems = (index: number)=>{
    let aux = index+1;
    if(aux < 10){
      return '0'+aux;
    } return aux;
  }

  useEffect(() => {
    async function fetchGet() {
      try {
        const animesAux = await axios.get('https://api.jikan.moe/v4/seasons/now');
        setSearchAnime(animesAux.data.data);
        setPagination(animesAux.data.pagination);
      } catch (error) {
        console.error('Erro ao buscar os posts:', error);
      }
    }
    fetchGet();
  }, []);

  return (
    <>
    <CardContainer>
      {searchAnime.map((anime) => {
        let themes = [ ...anime.studios,...anime.themes, ...anime.genres,...anime.demographics ];
        return (<>
        <AnimeSeasonCard 
            title={anime.title}
            episodes={anime.episodes}
            urlImage={anime.images.jpg.large_image_url}
            synopsis={anime.synopsis}
            themes={themes} 
            id={anime.mal_id}
            trailer={anime.trailer.youtube_id}     
          />
          </>)
      })}
    </CardContainer>
    <CardContainer>
      <div>
        {Array.from({ length: pagination.last_visible_page}, (_, index) => (
          (index+1) === pagination.current_page ? 
          <DefaultButton onClick={() => handlePageChange(index + 1)} color="selected">
            {printPaginationItems(index)}
          </DefaultButton>
          :
          <DefaultButton onClick={() => handlePageChange(index + 1)}>
            {printPaginationItems(index)}
          </DefaultButton>
        ))}
      </div>
  </CardContainer>
  </>
  );
}

export default AnimeSeason;