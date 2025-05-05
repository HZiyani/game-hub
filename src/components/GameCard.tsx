import { Game } from '@/hooks/useGames';
import { Image } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react/card';
import PlatformIconList from './PlatformIconList';

interface Props
{
  game: Game;
}

const GameCard = ({ game }: Props) => 
{
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Card.Body padding={0}>
        <Image src={ game.background_image } />
        <Card.Title>{ game.name }</Card.Title>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  )
}

export default GameCard