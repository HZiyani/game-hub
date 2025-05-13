import { Screenshot } from "@/entities/Screenshot";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) =>
{
  const apiCLient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiCLient.getAll
  });
}

export default useScreenshots;