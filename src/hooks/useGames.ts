import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/services/api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "@/store.ts";

const apiClient = new APIClient<Game>("/games")

export interface Game
{
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () =>
{
    const gameQuery = useGameQueryStore(s => s.gameQuery);
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
        {
            return apiClient.getAll({
                params:
                    {
                        genres: gameQuery.genreId,
                        parent_platforms: gameQuery.platformId,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                    },
            })
        }
    });
}

export default useGames;