import { TitleCard } from "../../DefaultCard/styles";
import { AnimeSeasonCardContainer } from "./styles";

interface AnimeCardProps {
  title: string;
  startYear: number;
}

const AnimeSeasonCard: React.FC<AnimeCardProps> = ({title,startYear}) => {
  return (
    <AnimeSeasonCardContainer>
      <TitleCard>{title}</TitleCard>
      {startYear}
    </AnimeSeasonCardContainer>
  );
}

export default AnimeSeasonCard;