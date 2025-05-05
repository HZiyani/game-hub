import { Game } from '@/hooks/useGames';
import { HStack, Image } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react/card';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/services/image-url';

interface Props
{
  game: Game;
}

const GameCard = ({ game }: Props) => 
{
  return (
    <Card.Root borderRadius={10} width="300px" overflow="hidden">
      <Card.Header padding={0}>
        <Image src={ getCroppedImageUrl(game.background_image) } />
      </Card.Header>
      <Card.Body padding={4}>
        <Card.Title>{ game.name }</Card.Title>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={ game.metacritic } />
        </HStack>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  )
}

export default GameCard