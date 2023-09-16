import { TitleCard } from "../../DefaultCard/styles";
import { AnimeSeasonCardContainer } from "./styles";

interface AnimeCardProps {
  title: string;
}

const AnimeSeasonCard: React.FC<AnimeCardProps> = ({title}) => {
  return (
    <AnimeSeasonCardContainer>
      <TitleCard>{title}</TitleCard>
    </AnimeSeasonCardContainer>
  );
}

export default AnimeSeasonCard;