import { Game } from "../entities/Game";
import { HStack, Image } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react/card';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/services/image-url';
import Emoji from './Emoji';
import {Link} from "react-router-dom";

interface Props
{
  game: Game;
}

const GameCard = ({ game }: Props) => 
{
  return (
    <Card.Root>
      <Card.Header padding={0}>
        <Image src={ getCroppedImageUrl(game.background_image) } />
      </Card.Header>
      <Card.Body padding={4}>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={ game.metacritic } />
        </HStack>
        <Card.Title>
            <Link to={"/games/" + game.slug}>{ game.name }</Link>
            <Emoji rating={game.rating_top}/>
        </Card.Title>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  )
}

export default GameCard