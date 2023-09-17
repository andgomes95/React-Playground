import { useEffect, useState } from "react";
import { CardContainer } from "../DefaultCard/styles";
import AnimeSeasonCard from "./AnimeSeasonCard";
import axios from 'axios';
import { Pagination, Themes } from "./utils";

export interface Anime {
  "title": string,
  "images": any,
  "synopsis": string,
  "episodes": number,
  "season": string,
  "year": string,
  "source": string,
  "studio": any,
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
  const [currentPage, setCurrentPage] = useState(pagination.current_page);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    getEspecificPage(currentPage);
  };

  async function getEspecificPage(page: number){
    try {
      const animesAux = await axios.get(`https://api.jikan.moe/v4/seasons/upcoming?page=${page}`);
      setSearchAnime(animesAux.data.data);
      setPagination(animesAux.data.pagination);
    } catch (error) {
      console.error('Erro ao buscar os posts:', error);
    }
  }

  useEffect(() => {
    async function fetchGet() {
      try {
        const animesAux = await axios.get('https://api.jikan.moe/v4/seasons/upcoming');
        setSearchAnime(animesAux.data.data);
        setPagination(animesAux.data.pagination);
      } catch (error) {
        console.error('Erro ao buscar os posts:', error);
      }
    }
    fetchGet();
  }, []);

  return (
    <CardContainer>
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
            trailer={anime.trailer.youtube_id}     
          />
          </>)
      })}
      <div>
        <h1>Paginação de Itens</h1>
        <ul>
          {searchAnime.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
        <nav>
          <ul className="pagination">
            {Array.from({ length: pagination.last_visible_page}, (_, index) => (
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
            ))}
          </ul>
        </nav>
      </div>
    </CardContainer>
  );
}

export default AnimeSeason;