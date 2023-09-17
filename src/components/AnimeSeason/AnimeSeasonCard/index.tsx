import { TitleCard } from "../../DefaultCard/styles";
import { Themes } from "../utils";
import { AnimeSeasonCardContainer, AnimeSeasonCardHeadContainer, AnimeSeasonCardInfoContainer } from "./styles";

interface AnimeCardProps {
  title: string;
  episodes: number;
  urlImage: string;
  synopsis: string;
  themes: Themes[];
}

const AnimeSeasonCard: React.FC<AnimeCardProps> = ({title,episodes,urlImage,synopsis,themes}) => {
  return (
    <AnimeSeasonCardContainer>
      <AnimeSeasonCardHeadContainer>
        <img src={urlImage} />
      </AnimeSeasonCardHeadContainer>
      <AnimeSeasonCardInfoContainer>
        <TitleCard>{title}</TitleCard>
        <p>{episodes == null ? '?' : episodes} Episodes - {themes.map((theme)=> theme.name + ' ')}</p>
        <p>{synopsis}</p>
      </AnimeSeasonCardInfoContainer>
    </AnimeSeasonCardContainer>
  );
}

export default AnimeSeasonCard;