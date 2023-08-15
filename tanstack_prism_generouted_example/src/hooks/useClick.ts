import {useQuery} from "@tanstack/react-query";
import {DefaultApi, ApplesResponse} from "../../types";

const queryFn = (): Promise<ApplesResponse> => new DefaultApi().fetchApples().then((response) => response.data)

export const useClick = () => {
  return useQuery({
    queryKey: ['useClick'],
    queryFn: queryFn,
    enabled: false
  })
}