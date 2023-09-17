import { TitleCard } from "../../DefaultCard/styles";
import YouTubeVideo from "../YoutubeVideo";
import { Themes } from "../utils";
import { AnimeSeasonCardContainer, AnimeSeasonCardHeadContainer, AnimeSeasonCardInfoContainer } from "./styles";

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
        <TitleCard>{title}</TitleCard>
        <p>{episodes == null ? '?' : episodes} Episodes {themes.map((theme)=> ' - '+ theme.name)}</p>
        <p>{synopsis}</p>
        {trailer!= null && <YouTubeVideo videoId={trailer}/>}
      </AnimeSeasonCardInfoContainer>
    </AnimeSeasonCardContainer>
  );
}

export default AnimeSeasonCard;