import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/store.ts";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games")

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