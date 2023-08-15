import {useQuery} from "@tanstack/react-query";
import {ApplesResponse, DefaultApi} from "../../types";

const queryFn = (): Promise<ApplesResponse> => new DefaultApi().fetchApples().then((response) => response.data)

export const useChainWithUseEffect = () => {
  return useQuery({
    queryKey: ['useChainWithUseEffect'],
    queryFn: queryFn,
    enabled: false,
  })
}