import axios from "axios";

export interface FetchResponse<T>
{
  count: number;
  results: T[];
}

export default axios.create(
  {
    baseURL: "https://api.rawg.io/api",
    params:
    {
      key: "8224a98edce542269f3b9149e221d2d6",
    }
  }
)