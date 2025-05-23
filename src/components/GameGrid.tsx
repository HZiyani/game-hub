import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () =>
{
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{ error.message }</Text>

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} gap={6} padding={5}>
      { isLoading && skeletons.map(skeleton => <GameCardContainer key={ skeleton }><GameCardSkeleton/></GameCardContainer>)}
      { data?.results.map(game => (
        <GameCardContainer key={ game.id}>
          <GameCard game={ game } />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  )
}

export default GameGrid