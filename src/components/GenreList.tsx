import useGenres, { Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { Button, Heading, HStack, Image, List, Spinner } from '@chakra-ui/react';

interface Props
{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      <List.Root variant="plain">
        { data.map(genre => (
          <List.Item key={ genre.id } paddingY="5px">
            <HStack>
              <Image
                boxSize="32px" 
                borderRadius={8} 
                objectFit="cover"
                src={ getCroppedImageUrl(genre.image_background) } />
              <Button as="a" whiteSpace="wrap" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} variant="ghost" onClick={() => onSelectGenre(genre)}>
                { genre.name }
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  )
}

export default GenreList