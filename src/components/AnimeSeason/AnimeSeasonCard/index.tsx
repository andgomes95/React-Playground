import YouTubeVideo from "../YoutubeVideo";
import { Themes } from "../utils";
import { AnimeSeasonCardContainer, AnimeSeasonCardHeadContainer, AnimeSeasonCardInfoContainer, AnimeSeasonSynopsis, AnimeSeasonTagItem, AnimeSeasonTags, AnimeSeasonTitle } from "./styles";

interface AnimeCardProps {
  title: string;
  episodes: number;
  urlImage: string;
  synopsis: string;
  themes: Themes[];
  id: number;
  trailer: string;
}

const AnimeSeasonCard: React.FC<AnimeCardProps> = ({title,episodes,urlImage,synopsis,themes,id,trailer}) => {
  return (
    <AnimeSeasonCardContainer>
      <AnimeSeasonCardHeadContainer>
        <img src={urlImage} key={id} alt={synopsis}/>
        <br />
      </AnimeSeasonCardHeadContainer>
      <AnimeSeasonCardInfoContainer>
      <AnimeSeasonTitle href={`https://myanimelist.net/anime/${id}`} target="_blank">{title}</AnimeSeasonTitle>
        <AnimeSeasonTags>
          <AnimeSeasonTagItem>{episodes == null ? '?' : episodes} Episodes </AnimeSeasonTagItem>
          {themes.map((theme)=> <AnimeSeasonTagItem>{theme.name}</AnimeSeasonTagItem>)}
        </AnimeSeasonTags>
        {synopsis !== null &&
        <AnimeSeasonSynopsis>
           <p>{synopsis}</p>
          {trailer!= null && <YouTubeVideo videoId={trailer}/>}
        </AnimeSeasonSynopsis>
        }
      </AnimeSeasonCardInfoContainer>
    </AnimeSeasonCardContainer>
  );
}

export default AnimeSeasonCard;