import useGenres, { Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { Button, HStack, Image, List, Spinner } from '@chakra-ui/react';

interface Props
{
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />

  return (
    <List.Root variant="plain">
      { data.map(genre => (
        <List.Item key={ genre.id } paddingY="5px">
          <HStack>
            <Image
              boxSize="32px" 
              borderRadius={8} 
              src={ getCroppedImageUrl(genre.image_background) } />
            <Button fontSize="lg" variant="ghost" onClick={() => onSelectGenre(genre)}>
              { genre.name }
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  )
}

export default GenreList