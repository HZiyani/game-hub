import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { Button, Heading, HStack, Image, List, Spinner } from '@chakra-ui/react';
import useGameQueryStore from "@/store.ts";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      <List.Root variant="plain">
        { data?.results.map(genre => (
          <List.Item key={ genre.id } paddingY="5px">
            <HStack>
              <Image
                boxSize="32px" 
                borderRadius={8} 
                objectFit="cover"
                src={ getCroppedImageUrl(genre.image_background) } />
              <Button fontSize="lg" whiteSpace="wrap" fontWeight={genre.id === selectedGenreId ? "bold" : "normal"} variant="ghost" onClick={() => setSelectedGenreId(genre.id)}>
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