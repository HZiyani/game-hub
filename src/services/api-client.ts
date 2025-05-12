import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T>
{
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create(
  {
    baseURL: "https://api.rawg.io/api",
    params:
    {
      key: "8224a98edce542269f3b9149e221d2d6",
    }
  }
)

class APIClient<T>
{
    endpoint: string;
    constructor(endpoint: string)
    {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) =>
    {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(response => response.data);
    }
}

export default APIClient;