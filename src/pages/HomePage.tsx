import {Box, Grid, GridItem, HStack} from "@chakra-ui/react";
import GenreList from "@/components/GenreList.tsx";
import GameHeading from "@/components/GameHeading.tsx";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import SortSelector from "@/components/SortSelector.tsx";
import GameGrid from "@/components/GameGrid.tsx";

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`
            }}
            templateColumns={{
                base: "1fr",
                lg: "250px 1fr"
            }}
        >
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

export default HomePage