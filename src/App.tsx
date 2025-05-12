import { Box, Grid, GridItem, HStack } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {


  return (
    <Grid 
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr"
      }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem area={'aside'} display={{ base: "none", lg: "block" }} paddingX={5}>
        <GenreList />
      </GridItem>
      <GridItem area={'main'}>
        <Box paddingLeft={5}>
          <GameHeading />
          <HStack gap={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
